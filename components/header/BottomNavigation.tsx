import React from 'react'
import { styled } from '@stitches/react'
import Link from 'next/link'
import {
  HomeIcon,
  SearchIcon,
  StarIcon,
  UserIcon,
} from '@heroicons/react/outline';
const Navigation = styled('nav', {
  // Height And Width
  height: '4rem',
  width: '100%',
  // Margin And Padding
  // Sticking to the bottom
  position: 'fixed',
  bottom: 0,
  // Shadows, Background Color And Backdrop
  boxShadow:
  '0px 10px 38px -10px rgba(22, 23, 24, 0.35),0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  backgroundColor: 'rgba(255, 255, 255)',
  // Changing Position Of Items
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  // Z Index
  zIndex: 50,
    // Tablet+ View
  '@media screen and (min-width: 600px)': {
    // Hide Element
    display: 'none'
  }  
})
const Anchor = styled('a', {})
const BottomNavigation = () => {
  return (
    <nav style={{  height: '4rem',
    width: '100%',
    // Margin And Padding
    // Sticking to the bottom
    position: 'fixed',
    bottom: 0,
    // Shadows, Background Color And Backdrop
    boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35),0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    backgroundColor: 'rgba(255, 255, 255)',
    // Changing Position Of Items
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // Z Index
    zIndex: 50,}} className="md:hidden flex">
      <Link href="/" passHref>
        <Anchor>
          <HomeIcon height={30} width={30} strokeWidth={1}/>
        </Anchor>
      </Link>
      <Link href="/search" passHref>
        <Anchor>
          <SearchIcon height={30} width={30} strokeWidth={1}/>
        </Anchor>
      </Link>
      <Link href="/cart" passHref>
        <Anchor>
          <StarIcon height={30} width={30} strokeWidth={1}/>
        </Anchor>
      </Link>
      <Link href="/profile" passHref>
        <Anchor>
          <UserIcon height={30} width={30} strokeWidth={1}/>
        </Anchor>
      </Link>
    </nav>
  )
}

export default BottomNavigation