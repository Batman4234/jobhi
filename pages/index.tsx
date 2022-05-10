import type { NextPage } from 'next';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { gray } from '@radix-ui/colors';
import { styled } from '@stitches/react';
import Headline from 'components/card/Headline';
import Card from 'components/card/Card';
import { useState } from 'react';
import CardRow from 'components/card/CardRow';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: gray.gray11,
  '&[data-orientation=horizontal]': {
    height: 1,
    marginLeft: '100px',
    width: '86%',
    marginTop: '60px',
  },
  zIndex: 30,
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});
export const Separator = StyledSeparator;
const TransitionDiv = styled('div', {
  transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
});
const Home: NextPage = () => {
  return (
    <TransitionDiv className='grid gap-10'>
      <CardRow name='trending' className='mt-80 lg:mt-[80px]'>
      <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>       <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>       <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>       <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>       <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>       <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>       <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>       <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div>       <div>
              <Card
                url='https://images.unsplash.com/photo-1651178948674-7b1cbf55ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                price='1$'
                item='Moscow'
                author='Viladimir Puhtin'
              />
            </div> 
      </CardRow>
      <CardRow name='mens' />
      <CardRow name='mens' />
      <CardRow name='mens' />
      <CardRow name='womens' />
    </TransitionDiv>
  );
};

export default Home;
