import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
  signInWithEmailLink,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  ConfirmationResult,
  User,
  NextFn,
} from 'firebase/auth';
import React, {
  SetStateAction,
  useContext,
  useEffect,
  useState,
  createContext,
} from 'react';
import actionCodeSettings from './actionCodeSettings';
import { auth, users } from './initializeApp';
import Cookie from 'js-cookie';
import {
  addDoc,
  doc,
  DocumentData,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { createUser } from './database';
interface Credentials {
  name: string;
  address: string;
}
interface updateProps {
  name?: string;
  address?: string;
}
interface context {
  user: any;
  sendLinkEmail: (email: string) => Promise<void>;
  handleUser: (rawUser: any) => void;
  signInNumber: (number: string) => Promise<ConfirmationResult>;
  signInLinkEmail: (
    email: string,
    name: string,
    address: string,
    setEmail?: React.Dispatch<SetStateAction<boolean>>
  ) => Promise<void>;
  confirmCode: (
    code: string,
    name: string,
    address: string,
    email: string
  ) => Promise<User>;
  loginConfirmCode: (code: string) => Promise<User>;
  signout: () => Promise<void>;
  getUser: () => Promise<DocumentData>;
  updateNameAddress: ({ name, address }: updateProps) => void;
  credentials: Credentials;
  setCredentials: React.Dispatch<SetStateAction<Credentials>>;
}
const AuthContext = createContext({} as context);
export function ProvideAuth({ children }: { children: React.ReactNode }) {
  const Auth = useProvideAuth();
  return <AuthContext.Provider value={Auth}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  return useContext(AuthContext);
}
export function useProvideAuth() {
  const [user, setUser] = useState<any>(null);
  const [credentials, setCredentials] = useState<Credentials>(
    {} as Credentials
  );
  const handleUser = async (rawUser: any ) => {
    if (rawUser) {
      const user = await formatUser(rawUser as User);
      
      const { token, ...userWithoutToken} = user
      createUser(user.uid, userWithoutToken);
      setUser(user);
      Cookie.set('signed', JSON.stringify(true), {
        expires: 1
      })
      return user;
    } else {
      setUser(false);
      Cookie.remove('signed')
      return false;
    }
  };
  const signInNumber = async (
    // Ask props here
    number: string
  ) => {
    // Initialize Recaptcha
    const recaptcha = () => {
      return (window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: () => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
          },
        },
        auth
      ));
    };
    recaptcha(); // Run Recaptcha
    // Sign In
    return signInWithPhoneNumber(auth, number, window.recaptchaVerifier).then(
      (results) => {
        return (window.confirmationResults = results);
      }
    );
  };
  const confirmCode = async (
    code: string,
    name: string,
    address: string,
    email: string
  ) => {
    const confirmationResult = window.confirmationResults;
    return confirmationResult.confirm(code).then((results) => {
      localStorage.removeItem('name');
      localStorage.removeItem('address');
      addDoc(users, {
        uid: results.user.uid,
        name,
        address,
        email,
        createdAt: new Date().toISOString(),
      })
        .then(() => {
        })
        .catch((error) => console.log(error));
      handleUser(results.user);
      return results.user;
    });
  };

  const loginConfirmCode = async (code: string) => {
    const confirmationResult = window.confirmationResults;
    return confirmationResult.confirm(code).then((results) => {
      handleUser(results.user);
      return results.user;
    });
  };
  const signout = async () => {
    return await signOut(auth).then(() => {
      handleUser(false);
    });
  };
  const sendLinkEmail = async (email: string) => {
    return sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then((user) => {
        window.localStorage.setItem('emailForSignIn', email);
      })
      .catch((error) => console.log(error));
  };
  const SignInLinkEmail = async (
    email: string,
    name: string,
    address: string,
    getEmail?: React.Dispatch<SetStateAction<boolean>>
  ) => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = localStorage.getItem('emailForSignIn') as string;
      if (!email) {
        if (getEmail) {
          getEmail(false);
        }
      }
      return signInWithEmailLink(auth, email, window.location.href)
        .then((results) => {
          handleUser(results.user);
          localStorage.removeItem('emailForSignIn');
          localStorage.removeItem('name');
          localStorage.removeItem('address');
          addDoc(users, {
            uid: results.user?.uid,
            name,
            address,
          })
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const getUser = async () => {
    let docs: DocumentData[] = [];
    const q = query(users, where('uid', '==', user.uid));
    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      return docs.push({ ...doc.data(), id: doc.id });
    });
    return docs;
  };

  const updateNameAddress = ({ name, address }: updateProps) => {
    getUser().then(async (Doc) => {
      const docRef = doc(users, Doc[0].id);
      if (name && address) {
        return updateDoc(docRef, {
          name,
          address,
        })
      } else if (name) {
        return updateDoc(docRef, {
          name,
        })
      } else {
        return updateDoc(docRef, {
          address,
        })
      }
    });
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => handleUser(user));
    return () => unsubscribe();
  }, []);
  return {
    user,
    sendLinkEmail,
    signInNumber,
    signInLinkEmail: SignInLinkEmail,
    confirmCode,
    updateNameAddress,
    signout,
    loginConfirmCode,
    getUser,
    credentials,
    setCredentials,
    handleUser,
  };
}
const getStripeRole = async () => {
  await auth.currentUser?.getIdToken(true);
  const decodedToken = await auth.currentUser?.getIdTokenResult();

  return decodedToken?.claims.stripeRole || 'free';
};

const formatUser = async (user: User) => {
  const token = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    stripeRole: await getStripeRole(),
    token,
  };
};
