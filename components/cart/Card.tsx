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
    textTransform: 'capitalize',
    color: gray.gray11,
    fontSize: 21,
    '@media screen and (max-width: 600px)': {
      fontSize: 20,
    },
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
  });
  const ItemH4 = styled('h4', {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    letterSpacing: '0.050px',
    textTransform: 'capitalize',
    color: gray.gray12,
    fontSize: 24,
    '@media screen and (max-width: 600px)': {
      fontSize: 20,
    },
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
  });
  const PriceTag = styled('h4', {
    fontFamily: 'Poppins',
    color: gray.gray11,
    // fontFamily: 'Montserrat'
    fontSize: 17,
    '@media screen and (max-width: 600px)': {
      fontSize: 20,
    },
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
  });
  export interface Props {
    name: string;
    author: string;
    price: number | string; 
    url: string;
    onCloseClick: React.MouseEventHandler;
  }
const Card = (props:Props) => {
  return (
    <div className='border border-midnight flex h-[10rem] w-full md:w-[60%] justify-between'>
    <div className='h-full w-full flex items-center'>
      <div className='w-[40%] lg:w-[35%] md:w-full h-full relative'>
        <Image
          layout='fill'
          objectFit='cover'
          src={
            props.url
          }
          alt=''
        />
      </div>
      <div className='ml-[20px] space-y-5'>
        <ItemH4>{props.name}</ItemH4>
        <AuthorH4>{props.author}</AuthorH4>
        <PriceTag>${props.price}</PriceTag>
      </div>
    </div>
    <div className='flex self-end p-2'>
      <button>
        <HeartIcon height={25} width={25} strokeWidth={1} />
      </button>
      <button onClick={props.onCloseClick}>
        <XIcon height={25} width={25} strokeWidth={1} />
      </button>
    </div>
  </div>
  )
}

export default Card