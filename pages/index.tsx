import type { NextPage } from 'next';
import { olive } from '@radix-ui/colors';
import { styled } from '@stitches/react';
import Headline from 'components/card/Headline';
import Card from 'components/card/Card';

const Home: NextPage = () => {
  return (
    <>
  <div className='mt-64 lg:mt-[150px] h-[600px] w-[100%]'>
    <Headline>Trending</Headline>
    <div className="flex flex-row w-[300px]">
        <Card url="https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" price="1$" item="Moscow" author="Viladimir Puhtin"/>
        <Card url="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFjfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" price="10$" item="Macih" author="Billih Gats"/>
    </div>
  </div>
  </>
  );
};

export default Home;
