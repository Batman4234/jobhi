import { useAuth } from '@lib/Auth';
import { createItem } from '@lib/database';
import { storage } from '@lib/initializeApp';
import {ref, uploadBytes} from 'firebase/storage'
import React, { useEffect } from 'react';
import {v4} from 'uuid';
import TextCenter from './textMiddle';
interface Product {
    name: string;
    price: string | number;
    material: string;
    color: string;
}
export interface Props {
product: Product;
selected: string;
files: FileList | undefined;
grid: any[];
}
const SellEnd = ({selected, product, files, grid}: Props) => {
    const auth = useAuth();
    const itemId = v4()
    useEffect(() => {
            createItem({
                ...product,
                itemType: selected,
                size: grid,
                authorId: auth.user?.uid,
                itemId: itemId,
                createdAt: new Date().toISOString()
            })
            if (files?.length) {
                Array.from(files).map(async (file) =>{
                    const imageRef = ref(storage, `images/items/${auth.user.uid}/${itemId}/${file.name+v4()}`)
                    await uploadBytes(imageRef, file).then(() => console.log('Done!'))
                })
        }
        }, [])
        return (
            <TextCenter title={itemId}/>
  )
}

export default SellEnd