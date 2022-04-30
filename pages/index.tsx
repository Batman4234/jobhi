import type { NextPage } from 'next';
import { olive } from '@radix-ui/colors';
import { styled } from '@stitches/react';
import Headline from 'components/card/Headline';
import Card from 'components/card/Card';

const Home: NextPage = () => {
  return (
    <>
  <div>
    <Headline>Trending</Headline>
    <div className="flex">
        <Card/>
        <Card/>
    </div>
  </div>
  </>
  );
};

export default Home;
