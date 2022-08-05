import { DocumentData } from 'firebase-admin/firestore';
import firebaseAdmin from '@lib/firebaseAdmin';
export async function getItems(itemId: any) {
    const snapshot = await firebaseAdmin.collection("items").where('itemId', '==', itemId).get();
    const items:any = [];
    snapshot.forEach((item) => {
        items.push({id: item.id, ...item.data()})
    })
    return items;
}
export async function getAllItems() {
    const snapshot = await firebaseAdmin.collection("items").get();
    const items:any = [];
    snapshot.forEach((item) => {
        items.push({id: item.id, ...item.data()})
    })
    console.log(items)
    return items;
}
