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
      <CardRow name='Mande Kaka' className='mt-80 md:mt-40 lg:mt-[80px]'>
        <Card
          url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
          price='₹10,000'
          item='Yojo Apten'
          author='Mande Kaka'
        />
        <Card
          url='https://images.unsplash.com/photo-1519052537078-e6302a4968d4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500'
          price='₹10,000'
          item='Yojo Apten'
          author='Mande Kaka'
        />
        <Card
          url='https://images.unsplash.com/photo-1573865526739-10659fec78a5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
          price='₹10,000'
          item='Yojo Apten'
          author='Mande Kaka'
        />
        <Card
          url='https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
          price='₹10,000'
          item='Yojo Apten'
          author='Mande Kaka'
        />

        <Card
          url='https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
          price='₹10,000'
          item='Yojo Apten'
          author='Mande Kaka'
        />

        <Card
          url='https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
          price='₹10,000'
          item='Yojo Apten'
          author='Mande Kaka'
        />

        <Card
          url='https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
          price='₹10,000'
          item='Yojo Apten'
          author='Mande Kaka'
        />

        <Card
          url='https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
          price='₹10,000'
          item='Yojo Apten'
          author='Mande Kaka'
        />

        <Card
          url='https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
          price='₹10,000'
          item='Yojo Apten'
          author='Mande Kaka'
        />
      </CardRow>
    </TransitionDiv>
  );
};

export default Home;
