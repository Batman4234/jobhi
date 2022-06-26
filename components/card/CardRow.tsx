import React, { Children, FC, PropsWithChildren, useState } from 'react';
import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';

// Props
export interface Props {
  name?: string;
  className?: string;
}

const ViewH4 = styled('button', {
  // Text Updates
  fontFamily: 'Poppins',
  textTransform: 'uppercase',
  fontSize: '20px',
  // Margin And Padding
  // Mobile View
  '@media screen and (max-width: 600px)': {
    // Text Updates
    // Margin And Padding
    paddingLeft: 15,
  },
  color: gray.gray11,
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
 <>
 <div>
      <div className={`bg-white flex justify-between md:px-20 pr-4 w-full mb-6`}>
          <ViewH4 css={{color: 'black'}}>{open ? name : name?.toUpperCase()}</ViewH4>
          <ViewH4
            id={`${name}`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? 'Close All' : 'View All'}
          </ViewH4>
      </div>
          <GridDiv className={` ${open ? 'block' : 'hidden'} grid gap-0 grid-cols-2 justify-evenly h-full`}>
           {children}
          </GridDiv>
        <div className={`justify-evenly flex ${open ? 'hidden' : 'z-10'}`}>
            {Child[0]}
            {Child[1]}
          <div className='hidden md:flex'>
            {Child[2]}
          </div>
        </div> </div>
      </>
  );
};

export default CardRow;
