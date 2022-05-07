import React, { FC } from 'react';
import Card from './Card';
import { useState } from 'react';
import Headline from './Headline';
import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';
import * as SelectPrimitive from '@radix-ui/react-select';

export interface Props {
  name?: string;
  className?: string;
}

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: 'Black',
  margin: 5,
  zIndex: 30,
});
export const Separator = StyledSeparator 
const ViewH4 = styled('button', {
  fontFamily: 'Poppins',
  textTransform: 'uppercase',
  fontSize: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px',
  marginRight: '7%',
  marginTop: '46px',
  '@media screen and (max-width: 600px)': {
    fontSize: 70,
  },
  color: gray.gray11,
  zIndex: 30,
});
const CardRow: FC<Props> = ({ name, className }) => {
  const [open, setOpen] = useState(false);
  const OpenDiv = styled('div', {
    display: `${!open ? 'none' : 'flex'}`,
    position: 'absolute',
    width: '100vw',
    backgroundColor: 'White',
    height: 2000,
    zIndex: `${open ? 30 : 20 }`
  });
  return (
    <div
      className={`${
        open &&
        'lg:w-full lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 z-40'
      } z-20 bg-white ${className ? className : 'mt-80 lg:mt-[20px]'} `}
    >
      <div className={`lg:mt-0 bg-white w-full mb-4`}>
        <div className={`flex justify-between bg-white lg:mb-0 z-20`}>
          <Headline>{open ? name : name?.toUpperCase()}</Headline>
          <ViewH4
            id={`${name}`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? 'Close All' : 'View All'}
          </ViewH4>
        </div>
      </div>
      <OpenDiv>
        <div>
          <div className='grid grid-cols-2 gap-[600px] md:gap-10 md:grid-cols-3 h-full'>
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
      <div className={`${open ? '' : 'flex z-10'}`}>
        <div className={`md:gap-10 w-[300px] flex`}>
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
