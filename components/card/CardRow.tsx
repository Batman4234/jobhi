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
const CardRow: FC<PropsWithChildren<Props>> = ({ name, className, children }) => {
  const [open, setOpen] = useState(false);
  const Child = Children.toArray(children);
  const OpenDiv = styled('div', {
    display: `${!open ? 'none' : 'flex'}`,
    position: 'absolute',
    width: '100vw',
    backgroundColor: 'White',
    height: 2000,
    zIndex: `${open ? 30 : 20 }`,
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
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
           {children}
          </div>
        </div>
      </OpenDiv>
      <div className={`${open ? 'hidden lg:flex' : 'flex z-10'}`}>
        <div className={`md:gap-10 w-[300px] flex`}>
          <div>
            {Child[0]}
          </div>
          <div>
            {Child[4]}
          </div>
          <div>
            {Child[2]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRow;
