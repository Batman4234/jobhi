import React, { FC } from 'react';
import { LoginIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import Select from './Select';
import Search from './Search';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from '@stitches/react';
const HeaderContainer = styled('header', {
  // Height And Width [ Required ]
  width: '100%',
  height: '5rem',
  // Centering
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  // Margin And Padding
  paddingLeft: 45,
  paddingRight: 20,
  // Shadow
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35),0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  // Mobile View
  '@media screen and (max-width: 600px)': {
    // Adjusting Height
    height: '6rem',
  },
});

const ButtonContainer = styled('div', {
  // Adding Space Between 
  display: 'flex',
  gap: 10
});
const Header: FC = () => {
  // Get Logged Results
  const logged: boolean = true;
  return (
    <>
      <HeaderContainer>
        <Select />
        <Link href='/'>
          <a className='flex'>
            <Image
              src={'/logo.svg'}
              width={100}
              height={25}
              alt='Logo Mascot'
            />
          </a>
        </Link>

        <ButtonContainer>
          <Search />
          <Link href={`${!logged ? '/login' : '/profile'}`}>
            <a className='flex'>
              {!logged ? (
                <LoginIcon height={25} width={25} strokeWidth={1} />
              ) : (
                <UserIcon height={25} width={25} strokeWidth={1} />
              )}
            </a>
          </Link>
          <Link href='/cart'>
            <a className='flex'>
              <ShoppingBagIcon height={25} width={25} strokeWidth={1} />
            </a>
          </Link>
        </ButtonContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
