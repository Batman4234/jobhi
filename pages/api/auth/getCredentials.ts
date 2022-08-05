import admin, {auth} from '@lib/firebaseAdmin';
import { DocumentData } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
const getCredentials = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers?.token as string);
      const db = admin.collection('users').where('uid', '==', uid);
      const snapshot = await db.get();
      let credentials: DocumentData = {};
      snapshot.forEach((doc) => {
          credentials = { id: doc.id, ...doc.data() };
        });
        console.log(uid)
        return res.status(200).json(credentials);     
      }
      catch(error) {
        return res.status(500).send({error})
      }
};
export default getCredentials;
