import React from 'react'
import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';
import Image from 'next/image'
import { HeartIcon, XIcon } from '@heroicons/react/outline';

const DetailContainer = styled('div', {
    // Margin And Padding
    marginLeft: 20,
  });
  const AuthorH4 = styled('h4', {
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: 25,
    '@media screen and (max-width: 600px)': {
      fontSize: 20,
    },
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
  });
  const ItemH4 = styled('h4', {
    fontFamily: 'Montserrat',
    letterSpacing: '0.050px',
    textTransform: 'capitalize',
    color: gray.gray11,
    fontSize: 30,
    '@media screen and (max-width: 600px)': {
      fontSize: 20,
    },
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
  });
  const PriceTag = styled('h4', {
    fontFamily: 'Poppins',
    // fontFamily: 'Montserrat'
    fontSize: 20,
    '@media screen and (max-width: 600px)': {
      fontSize: 20,
    },
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
  });
const Card = () => {
  return (
    <div className='border border-midnight flex h-[10rem] w-full md:w-[60%] justify-between'>
    <div className='h-full w-full flex items-center'>
      <div className='w-[40%] lg:w-[25%] md:w-full h-full relative'>
        <Image
          layout='fill'
          objectFit='cover'
          src={
            'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
          }
          alt=''
        />
      </div>
      <DetailContainer>
        <ItemH4>CARD</ItemH4>
        <AuthorH4>NAME</AuthorH4>
        <PriceTag>₹110,100</PriceTag>
      </DetailContainer>
    </div>
    <div className='flex self-end p-2'>
      <button>
        <HeartIcon height={25} width={25} strokeWidth={1} />
      </button>
      <button>
        <XIcon height={25} width={25} strokeWidth={1} />
      </button>
    </div>
  </div>
  )
}

export default Card