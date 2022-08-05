import { storage } from '@lib/initializeApp';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
const url:string[] = [];
const {authorId, itemId} = req.body
const imgRef = ref(storage, `images/items/${authorId}/${itemId}`)
await listAll(imgRef).then((res) => {
    res.items.map(item => {
        getDownloadURL(item).then(urlItem => url.push(urlItem))
    });
})
console.log(url)
res.status(200).json(url)
return url;
}