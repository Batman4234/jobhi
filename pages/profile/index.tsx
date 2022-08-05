import Button from '@components/button/Button';
import { gray } from '@radix-ui/colors';
import { styled } from '@stitches/react';
import React, { useState } from 'react';
import { useAuth } from '@lib/Auth';
import useSWR from 'swr'
import Loader from 'react-spinners/PropagateLoader'
import { auth as Auth } from '@lib/initializeApp';
import Head from 'next/head';
import fetcher from 'fetcher';
import { useRouter } from 'next/router';
const ProfileContainer = styled('div', {
  // Height And Width
  height: '100%',
  width: '100%',
  // Margin And Padding
  padding: 50,
  // Mobile View
});
const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});
const Label = styled('label', {
  // Text Transformations
  fontFamily: 'Montserrat',
  textTransform: 'uppercase',
  fontSize: 15,
  letterSpacing: '0.025em',
});
const Profile = () => {
  const auth = useAuth();
  const router = useRouter()
  const [click, setClick] = useState<boolean>(false);
  interface Credentials {
    name: string;
    address: string;
  }
  const [credentials, setCredentials] = useState<Credentials>(
    {name: '', address: ''} as Credentials
    );
  const { data } = useSWR(auth.user ? ['/api/auth/getCredentials', auth.user.token] : null, fetcher)
  if (!data) {
    return (
      <>
      <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        if (document.cookie && !document.cookie.includes('signed')) {
          window.location.href = "/login"
        }
      `,
        }}
      />
    </Head>
    <div className='space-y-10  h-full w-full p-[50px] '>
    <div className='space-y-2 flex flex-col animate-pulse'>
      <div  className="w-[50px] h-[23px] bg-slate-200"></div>
      <div
        className='outline-none border w-full border-midnight focus:border-black pl-3 h-12 font-montserrat'
      />
    </div>
    <div className='space-y-2 flex flex-col animate-pulse'>
    <div  className="w-[50px] h-[23px] bg-slate-200 animate-pulse"></div>
      <div
        className='border border-midnight focus:border-black pl-3 h-12 w-full'
      />
    </div>
    <div className='space-y-2 flex flex-col animate-pulse'>
    <div  className="w-[78px] h-[23px] bg-slate-200 animate-pulse"></div>
      <div
        className='outline-none border border-midnight w-full focus:border-black pl-3 h-12 font-montserrat'
      />
    </div>
    <div
    className="animate-none"
    style={{ width: '100%', justifyContent: 'center', flexDirection: 'row', display: 'flex' }}
    >
      <button
    className="animate-none h-[50px] w-[150px] bg-white border border-midnight"
    >
        </button>
   <button
    className="animate-none h-[50px] w-[150px] border bg-midnight border-midnight"
    ></button>
    </div>
  </div>
    </>
   )
  }
  return (
    <>
    <ProfileContainer className='space-y-10'>
      <Container className='space-y-2'>
        <Label htmlFor='name'>name</Label>
        <input
          className='outline-none border border-midnight focus:border-black pl-3 h-12 font-montserrat'
          type='text'
          name='name'
          id='name'
          value={credentials.name ? credentials.name : ''}
          onChange={(e) => {
            return setCredentials({
              name: e.target.value,
              address: credentials.address,
            });
          }}
          placeholder={data?.name || "Loading..."}
        />
      </Container>
      <Container className='space-y-2'>
        <Label css={{ color: gray.gray12 }} htmlFor='email'>
          email
        </Label>
        <input
          className='outline-none border border-midnight focus:border-black pl-3 h-12 font-poppins text-midnight'
          type='text'
          disabled
          name='email'
          id='email'
          value={
            (auth.user?.email as string) || (auth.user?.phoneNumber as string)
          }
        />
      </Container>
      <Container className='space-y-2'>
        <Label htmlFor='address'>Address</Label>
        <input
          className='outline-none border border-midnight focus:border-black pl-3 h-12 font-montserrat'
          type='text'
          name='address'
          id='address'
          value={credentials.address ? credentials.address : ''}
          onChange={(e) => {
            return setCredentials({
              name: credentials.name,
              address: e.target.value,
            });
          }}
          placeholder={
            data?.address || 'Loading...'
          }
        />
      </Container>
      <Container
        css={{ width: '100%', justifyContent: 'center', flexDirection: 'row' }}
      >
        <Button
          on={click ? true : false}
          width={150}
          hover={false}
          height={50}
          fontWeight={800}
          fontSize={20}
          onClick={() => {
            setClick(true);
            setCredentials({
              name: '',
              address: ''
            })
            if (click) {
            setTimeout(() => {              
              setClick(false)
            }, 60 * 1000);
            if (credentials.name && credentials.address) {
              localStorage.setItem('name', credentials.name);
              localStorage.setItem('address', credentials.address);
              return auth.updateNameAddress({
                name: credentials.name,
                address: credentials.address,
              });
            } else if (credentials.name) {
              localStorage.setItem('name', credentials.name);
             return auth.updateNameAddress({ name: credentials.name });
            } else if (credentials.address) {
              localStorage.setItem('address', credentials.address);
              return auth.updateNameAddress({ address: credentials.address });
            }
          }  
            }
        }
        >
          Save
        </Button>
        <Button
          on={click ? false : true}
          hover={false}
          width={150}
          height={50}
          fontWeight={800}
          fontSize={20}
          onClick={() => {
            auth.signout()
            router.push('/')
          }}
        >
          logout
        </Button>
      </Container>
    </ProfileContainer>
    </>
  );
};
export default Profile;