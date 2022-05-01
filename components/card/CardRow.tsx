import React, { FC } from 'react';
import Link from 'next/link';
import Card from './Card';
import { useState } from 'react';
import Headline from './Headline';
import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';
import { useRouter } from 'next/router'

export interface Props {
    name?: string;
}
const ViewH4 = styled('button', {
  fontFamily: 'Poppins',
  textTransform: 'uppercase',
  fontSize: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px',
  marginRight: '4%',
  marginTop: '46px',
  '@media screen and (max-width: 600px)': {
    fontSize: 70,
  },
  color: gray.gray11,
});
const CardRow:FC<Props> = ({name}) => {
  const [open, setOpen] = useState(false);
  const OpenDiv = styled('div', {
    display: `${!open ? 'none' : 'flex'}`,
    position: 'absolute',
    width: '100%',
    height: '100%',
  });
  return (
    <div
      className={`${
        open && 'absolute w-full h-full top-0 bottom-0 left-0 right-0'
      }`}
    >
      <div className='mt-64 lg:mt-[80px] w-full'>
        <div className={`flex justify-between bg-white lg:mb-0 z-20`}>
          <Headline>{open ? name : name?.toUpperCase()}</Headline>
              <ViewH4
          id={`${name}`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? 'View All' : 'View All'}
          </ViewH4>
        </div>
      </div>
      <OpenDiv>
        <div>
          <div className='grid grid-cols-2 gap-[600px] md:gap-10 md:grid-cols-3'>
            <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>
            <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>
            <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>
            <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>
            <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>
            <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>
            <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>
          </div>
        </div>
      </OpenDiv>

      <div className={`${open ? 'hidden' : 'flex'}`}>
        <div className={` md:gap-10 w-[300px] flex`}>
          <Card
            url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            price='1$'
            item='Moscow'
            author='Viladimir Puhtin'
          />
          <Card
            url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            price='1$'
            item='Moscow'
            author='Viladimir Puhtin'
          />
          <Card
            url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            price='1$'
            item='Moscow'
            author='Viladimir Puhtin'
            className='hidden lg:block'
          />
        </div>
      </div>
    </div>
  );
};

export default CardRow;
