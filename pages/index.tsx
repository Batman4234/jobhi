import type { NextPage } from 'next';
import { gray } from '@radix-ui/colors';
import { styled } from '@stitches/react';
import Headline from 'components/card/Headline';
import Card from 'components/card/Card';
import { useState } from 'react';
import CardRow from 'components/card/CardRow';

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

const Home: NextPage = () => {
  const [trending, setTrending] = useState(false);
  const OpenDiv = styled('div', {
    display: `${!trending ? 'none' : 'flex'}`,
    position: 'absolute',
    width: '100%',
    height: '100%',
  });
  return (
    <div className="">
      <CardRow name="trending" />
    </div>
  );
};

export default Home;
