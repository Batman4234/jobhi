import { DocumentData } from 'firebase-admin/firestore';
import { carts, users, items } from '@lib/initializeApp';
import * as firestore from 'firebase/firestore';

export async function createCart(data:any) {
    firestore.addDoc( carts ,{...data})
}
export async function deleteCart(id:string) {
    const doc = firestore.doc(carts, id)
    firestore.deleteDoc(doc)
}
export async function createUser(uid:any, data:any) {
    const doc = firestore.doc(users, uid)
    firestore.setDoc(doc, { uid, ...data }, { merge: true });
  }
export async function createItem(data:any) {
    firestore.addDoc(items, {...data})
}
export async function getUser(uid:string) {
    const query = firestore.query(users , firestore.where("uid", '==', uid))
    const snapshot = await firestore.getDocs(query)
      let credentials: DocumentData = {};
      snapshot.forEach((doc) => {
          credentials = { id: doc.id, ...doc.data() };
        });
        return credentials;
}