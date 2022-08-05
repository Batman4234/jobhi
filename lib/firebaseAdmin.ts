import  { AppOptions,initializeApp, cert, getApps } from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore'
import {getAuth} from 'firebase-admin/auth'
if (!getApps().length) {
    initializeApp({
        credential: cert({
            clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
        } 
        ),
    } );    
}
export default getFirestore()
export const auth = getAuth()