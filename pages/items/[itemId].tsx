import ViewCard from '@components/card/ViewCard';
import { getAllItems, getItems } from '@lib/databaseAdmin';
import {  getUser } from '@lib/database';
import { GetStaticPaths } from 'next';
import { GetStaticProps } from 'next';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '@lib/initializeApp';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import axios from 'axios';
import fetcher from 'fetcher';
import { useAuth } from '@lib/Auth';
import useSWR from 'swr';
export const getStaticProps: GetStaticProps = async (ctx) => {
  const itemId = ctx.params?.itemId;
  const item = await getItems(itemId);
  return {
    props: {
      initialItem: item,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const items = await getAllItems();
  const paths = items.map((item:any) => ({
    params: {
      itemId: item.itemId
    }
  }))
  return {
    paths,
    fallback: false,
  };
};
interface item {
  id: string;
  name: string;
  createdAt: string;
  price: string;
  itemId: string;
  authorId: string;
  color: string;
  material: string;
  size: any[];
  itemType: {
    name: string;
  };
}
const Item = ({ initialItem }: { initialItem: item[] }) => {
  const [imgList, setImgList] = useState<string[]>([])
  const {user} = useAuth();
  const api = `/api/auth/getUser/${initialItem[0].authorId}`
  const { data } = useSWR(user && initialItem.length ? api : null, fetcher);
  useEffect(() => {
    if (!initialItem) return;
    const item = initialItem[0];
    const imgRef = ref(storage, `images/items/${item.authorId}/${item.itemId}`);
     listAll(imgRef).then((response) => {
         response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImgList((prev) => [...prev, url])
          })
          });
        });
  }, [])
  if (!initialItem) return;
  else if (!imgList.length) return; 
  else if (!data) return; 
  const Item = () => {
    const item = initialItem[0]
    return (
      <>
      <ViewCard
      author={data.name}
      title={item.name}
      color={item.color}
      material={item.material}
      price={item.price}
      size={item.size}
      urls={imgList}
      />
      </>
    )
  }
  return (
    <>
    {
Item()
    }
    </>
  );
};
export default Item;
