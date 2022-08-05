import ViewCard from '@components/card/ViewCard';
import { getAllItems, getItems } from '@lib/databaseAdmin';
import { getUser } from '@lib/database';
import { GetStaticPaths } from 'next';
import { GetStaticProps } from 'next';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '@lib/initializeApp';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import axios from 'axios';
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
  return {
    paths: [
      {
        params: {
          itemId: "3081f4a8-7071-49be-a8da-ec5a2e4daec0"
        }}
    ],
    fallback: true,
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
  useEffect(() => {
    if (!initialItem) return;
    const item = initialItem[0];
    const view = async () => {
      const url = await axios.post("/api/item/getURL", {
        authorId: item.authorId,
        itemId: item.itemId
      }).then(res => res.data)
      console.log(url)
    }
    view()
  })
  if (!initialItem) return;
  const Item = () => {
    const item = initialItem[0]

    return (
      <>
      <ViewCard
      author={item.id}
      title={item.name}
      color={item.color}
      material={item.material}
      price={item.price}
      size={item.size}
      urls={["https://images.unsplash.com/photo-1659586555159-b92894ac3176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"]}
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
