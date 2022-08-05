import type { NextApiRequest, NextApiResponse } from 'next'
import {compareDesc, parseISO} from 'date-fns'; 
import { DocumentData } from 'firebase-admin/firestore';
import admin, {auth} from '@lib/firebaseAdmin';
interface CartData {
id: string;
author?: string;
name?: string;
pageUrl?: string;
price?: string;
url?: string;
};
export default async function handler (req: NextApiRequest, res: NextApiResponse) {    
    const {uid} = await auth.verifyIdToken(req.headers.token as string);
    try {
        const snapshot = await admin.collection('carts').where('uid', '==', uid).get()
        let carts:DocumentData[] = []
        snapshot.forEach((doc) => {
            carts.push({id: doc.id, ...doc.data()})
        })
        carts.sort((a:any,b:any) => compareDesc(parseISO(a.createdAt), parseISO(a.createdAt)))
        return res.status(200).json(carts)
    } catch (error) {
        console.log(error)
    return res.status(500).send({error})
    }
}