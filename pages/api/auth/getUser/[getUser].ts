import { DocumentData } from 'firebase-admin/firestore';
import admin, { auth } from '@lib/firebaseAdmin';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const user = req.query.getUser as string;
    console.log(user)
    const db = admin.collection('users').where('uid', '==', user);
    const snapshot = await db.get();
    let credentials: DocumentData = {};
    snapshot.forEach((doc) => {
        credentials = { id: doc.id, ...doc.data() };
      });
      return res.status(200).json(credentials);     
}