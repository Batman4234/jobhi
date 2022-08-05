import type { NextPage } from 'next';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { gray } from '@radix-ui/colors';
import { styled } from '@stitches/react';
import Card from 'components/card/Card';
import { useEffect, useState } from 'react';
import CardRow from 'components/card/CardRow';
import Button from '@components/button/Button';
import { useAuth } from '@lib/Auth';
import { useRouter } from 'next/router';
import Head from 'next/head';
const EmailDiv = styled('div', {
  backgroundColor: 'white',
  border: '1px solid #171717',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `all 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});
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
  const [emailDevice, setEmailDevice] = useState<boolean>(true);
  const [emailValue, setEmailValue] = useState<string>('');
  const auth = useAuth();
  const router = useRouter()
  useEffect(()=> {
    const name = auth.credentials.name !== undefined ? auth.credentials.name : localStorage.getItem('name')
    const address = auth.credentials.address !== undefined ? auth.credentials.name : localStorage.getItem('address')
    if (!auth.user) { auth.signInLinkEmail(emailValue, name as string, address as string, setEmailDevice).then(() => router.replace('/'))}
  }, [])
  return (
    <>
    <Head>
      <title>Jobhi - Shop Luxury Products With Ease! </title>
    </Head>
      <TransitionDiv className='grid space-y-[3.6rem] md:space-y-14 h-full w-full pb-[8rem] md:pb-0'>
        <CardRow name='Trending' className=''>
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Curd'
          />
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
        </CardRow>
        <CardRow name='MENS'>
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
          <Card
            url='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
            price='₹10,000'
            item='Yojo Apten'
            author='Card'
          />
        </CardRow>
      </TransitionDiv>
      <EmailDiv css={{display: emailDevice ? 'none' : 'flex'}}>
        <input
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          className='outline-none border mb-4 border-midnight focus:border-black pl-3 h-12 w-full font-montserrat'
          placeholder={'Enter your email here'}
          type={'email'}
        />
        <Button
          height={32}
          width={140}
          hover={true}
          onClick={() => {
            if (emailValue.includes('@')) {
              setEmailDevice(true);
              localStorage.setItem('emailForSignIn', emailValue);
              const name = auth.credentials.name !== undefined ? auth.credentials.name : localStorage.getItem('name')
              const address = auth.credentials.address !== undefined ? auth.credentials.name : localStorage.getItem
              ('address')
              if (!auth.user) { auth.signInLinkEmail(emailValue, name as string, address as string, setEmailDevice); router.push('/').then(() => router.reload)
              }
            }
          }}
          fontWeight={700}
          className='pt-[0.10rem]'
        >
          Confirm
        </Button>
      </EmailDiv>
    </>
  );
};
export default Home;
