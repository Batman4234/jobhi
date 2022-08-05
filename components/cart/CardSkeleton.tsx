import React from 'react'
import styles from '@styles/cart.module.css'
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
    fontWeight: 500,
    fontSize: 21,
    '@media screen and (max-width: 600px)': {
      fontSize: 20,
    },
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
        height: 21,
    width: 150,
  });
  const ItemH4 = styled('h4', {
    fontFamily: 'Montserrat',
    letterSpacing: '0.050px',
    textTransform: 'capitalize',
    color: gray.gray11,
    fontSize: 24,
    '@media screen and (max-width: 600px)': {
      fontSize: 20,
    },
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
    height: 24,
    width: 180,
  });
  const PriceTag = styled('h4', {
    fontFamily: 'Poppins',
    marginTop: 2,
    // fontFamily: 'Montserrat'
    fontSize: 17,
    '@media screen and (max-width: 600px)': {
      fontSize: 20,
    },
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
    height: 17,
    width: 40,
  });
const Card = () => {
  return (
    <div className='border border-midnight flex h-[10rem] w-full md:w-[60%] justify-between'>
    <div className='h-full animate-pulse w-full flex items-center'>
      <div className={`bg-gray-300 w-[40%] lg:w-[35%] md:w-full h-full relative`}>
      </div>
      <div className="space-y-4 ml-[20px]">
        <ItemH4 className={'bg-gray-300'}></ItemH4>
        <AuthorH4 className={'bg-gray-300'} ></AuthorH4>
        <PriceTag className={'bg-gray-300'}></PriceTag>
      </div>
    </div>
    <div className='flex self-end p-2 space-x-2 animate-pulse'>
      <button className={`bg-gray-300 h-[25px] w-[25px] `} >
      </button>
      <button className={`bg-gray-300 h-[25px] w-[25px] `} >

      </button>
    </div>
  </div>
  )
}

export default Card