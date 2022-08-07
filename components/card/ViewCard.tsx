import React, { FC, useState } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';
import Button from '@components/button/Button';
import Cloth from '@public/Cloth.svg';
import { ColorSwatchIcon as Color, HeartIcon } from '@heroicons/react/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import axios from 'axios';
import useSWR from 'swr'
import { Pagination, Keyboard, Mousewheel, Navigation } from 'swiper';
import ToastFunction from '@components/toast';
import { useAuth } from '@lib/Auth';
import { useRouter } from 'next/router';
import { createCart } from '@lib/database';
import TextCenter from '@components/textMiddle';
import Head from 'next/head';
export interface Props {
  author: string;
  color: string;
  material: string;
  price: number | string;
  size: any[];
  title: string;
  urls: string[];
}
const GridDiv = styled('div', {
  gridTemplateColumns: "repeat(10, auto)",
  '@media screen and (max-width: 600px)': {
  gridTemplateColumns: "repeat(5, auto)",
  }
})
export const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: gray.gray12,
  '&[data-orientation=horizontal]': { height: 1 },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});
export const Separator = StyledSeparator;
function getRelativePos(clientX: number, clientY: number, currentTarget: any) {
  const { left, top } = currentTarget.getBoundingClientRect();
  return {
    x: clientX - left,
    y: clientY - top,
  };
}
const ViewCard: FC<Props> = ({
  author,
  color,
  material,
  price,
  size,
  title,
  urls,
}) => {
  const [cartClick, setCartClick] = useState<boolean>(false);
  const [uri, setUri] = useState(urls[0]);
  const auth = useAuth();
  const router = useRouter();
  const HandleCart = () => {
    if (auth.user) {
      setCartClick(true)
      setTimeout(() => {
      createCart({
        author,
        name:title,
      price,
      uid: auth.user?.uid,
      pageUrl: router.pathname,
      url: uri,
      createdAt: new Date().toISOString(),
    })
  }, 700)
}
else {
return router.push('/login')
}
  }
  return (
    <>
    <div className='h-full w-full lg:pl-5 lg:pt-3 flex pt-1 flex-col'>
      {/* <h5 className='hidden pl-5 lg:pl-0 font-[Poppins] space-x-2 h-[20px] items-center lg:flex lg:mb-[0.655rem] '>
        <span className='text-gray-800'>Element 2 </span> <span> {'>'}</span>
        <span className='text-gray-700'>{title}</span>
      </h5> */}
      <div className='w-full h-full flex flex-col lg:flex-row lg:space-x-10 gap-7 justify-center'>
        <div className='hidden lg:block h-[560px] w-[560px]'
        >
          <Swiper
            modules={[Pagination, Keyboard, Mousewheel, Navigation]}
            effect='slide'
            pagination={{ clickable: true }}
            keyboard
            mousewheel
            navigation
          >
              {urls.map((url) => (
              <SwiperSlide key={url}>
            <Image
            width={540}
            height={500}
            objectFit='cover'
            src={url}
            alt='Preview'
            quality={100}
            priority={true}
            />
              </SwiperSlide>
            ))}</Swiper>
        </div>
        <div className='relative w-screen h-[70vh] block lg:hidden'>
          <Swiper
            modules={[Pagination, Keyboard, Mousewheel]}
            effect='slide'
            pagination={{ clickable: true }}
            keyboard
            mousewheel
          >
            {urls.map((url) => (
              <SwiperSlide key={url}>
                <Image
                  layout='fill'
                  quality={100}
                  objectFit='cover'
                  src={url}
                  alt='Preview'
                  className='cursor-pointer'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='h-full px-5 lg:px-0 w-[46%]'>
          <div
            className='h-full w-full space-y-8'
          >
            <div className='space-y-2'>
              <div className="flex justify-between pr-[3%]">             
              <h4
                style={{
                  transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
                }}
                className='font-montserrat uppercase text-midnight text-2xl font-[500] tracking-wider'
                aria-label='Title of the product'
              >
                {title}
              </h4>
              <button>
                <HeartIcon height={25} width={25}/>
              </button>
              </div>
              <h5
                style={{
                  transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
                }}
                className='font-montserrat capitalize text-[#5A5555] text-md'
                aria-label='Author of the product'
              >
                {author}
              </h5>
              <h4
                style={{
                  transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
                }}
                className='pt-2 font-poppins text-midnight flex flex-col'
                aria-label='Price of the product'
              >
                ₹{price}
                <span className='text-[#5A5555] text-xs'>
                  Including all the taxes
                </span>
              </h4>
            </div>
            <Separator css={{ marginLeft: 2, marginRight: 5 }} />
            <div className='flex flex-col md:block'>
              <h5 className='font-poppins text-xl flex items-center gap-2'>
                Select your size
                <span className='text-xs cursor-pointer'>
                  What&apos;s your size?
                </span>
              </h5>
              <GridDiv
                className='grid h-full gap-3 mt-5 self-center lg:justify-start'
                aria-label='Size grid'
              >
                {size.map((sze:any) => (
                     <Button
                     key={sze.name}
                     height={50}
                     width={50}
                     mobileHeight={50}
                     className={'py-2'}
                   >
                     {sze.name}
                   </Button>
                ))}
              </GridDiv><div className='my-5 lg:hidden flex justify-center gap-2'>
              <Button
              mobileWidth={170}
              fontSize={17}
              mobileHeight={50}
              width={151}
              hover={false}
              on={false}
              height={49}
              fontWeight={500}
              onClick={HandleCart}
            >
              Add to cart
            </Button>
            <Button
              mobileWidth={160}
              mobileHeight={50}
              width={151}
              height={49}
              hover={true}
              on={true}
              font='Montserrat'
              fontWeight={700}
            >
              Buy now
            </Button>
              </div>
              <div className='mb-[5rem] md:mb-3 space-y-5 mt-4 md:mt-8 '>
                <h5 className='flex font-poppins items-center gap-2'>
                  <span className='gap-3 flex items-center'>
                    <Cloth
                      strokeWidth={1}
                      className='h-[30px] w-[30px]'
                      aria-label='The material of the product'
                    />
                    Material:
                  </span>
                  <span className='text-greyo capitalize'>{material}</span>
                </h5>
                <h5
                  className='flex font-poppins items-center gap-2'
                  aria-label='The color of the product'
                >
                  <span className='gap-3 flex items-center'>
                    <Color strokeWidth={1} className='h-[30px] w-[30px]' />
                    Color:
                  </span>
                  <span className='text-greyo capitalize'>{color}</span>
                </h5>
              </div>              
            </div>
            <div className='hidden md:flex'>
            <Button
              mobileWidth={160}
              fontSize={20}
              mobileHeight={50}
              width={151}
              hover={false}
              on={false}
              height={49}
              fontWeight={500}
              onClick={HandleCart}
            >
              Add to cart
            </Button>
            <Button
              mobileWidth={160}
              mobileHeight={50}
              width={151}
              height={49}
              hover={true}
              on={true}
              font='Montserrat'
              fontWeight={700}
            >
              Buy now
            </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <ToastFunction open={cartClick} onOpenChange={setCartClick} duration={700} title={auth.user ? `Added ${title} To Cart` : 'Authorization Error'} description={auth.user ? `Added ${title} by ${author} To Your Cart` : 'Please sign in to continue'}/>
    </>
  );
};

export default ViewCard;
