import React, { Children, FC } from 'react';
import Card from './Card';
import { useState } from 'react';
import Headline from './Headline';
import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';
import { PropsWithChildren } from 'react';
export interface Props {
  name?: string;
  className?: string;
}

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
  transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
});
const GridDiv = styled('div', {
  '@media only screen and (max-width: 640px)': {
    gridTemplateColumns: 'repeat(2, auto)'
  },
  '@media only screen and (min-width: 768px)': {
    gridTemplateColumns: 'repeat(3, auto)'
  }
})
const CardRow: FC<PropsWithChildren<Props>> = ({ name, className, children }) => {
  const [open, setOpen] = useState(false);
  const Child = Children.toArray(children);
  return (
    <div
      className={`${
        open &&
        'w-full h-full z-40'
      } z-20 bg-white ${className ? className : 'mt-80 md:mt-40px lg:mt-[80px]'} `}
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
          <GridDiv className={` ${open ? 'block' : 'hidden'} grid gap-0 grid-cols-2 justify-evenly h-full`}>
           {children}
          </GridDiv>
        <div className={`justify-evenly flex ${open ? 'hidden' : 'z-10'}`}>
          <div>
            {Child[0]}
          </div>
          <div>
            {Child[1]}
          </div>
          <div className='hidden md:flex'>
            {Child[2]}
          </div>
        </div>
      </div>
  );
};

export default CardRow;
