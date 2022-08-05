import { getItems } from '@lib/databaseAdmin';
import firebaseAdmin from '@lib/firebaseAdmin';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler (req:NextApiRequest, res: NextApiResponse) {
const itemId = req.query.itemId
const item = await getItems(itemId)
return res.status(200).json({item})
}