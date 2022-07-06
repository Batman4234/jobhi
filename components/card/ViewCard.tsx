import React, { FC, useState } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';
import Button from '@components/button/Button';
import Cloth from '@public/Cloth.svg';
import { ColorSwatchIcon as Color } from '@heroicons/react/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Pagination, Keyboard, Mousewheel } from 'swiper';
export interface Props {
  author: string;
  color: string;
  material: string;
  price: number | string;
  size: number;
  title: string;
  urls: [string, string, string];
}
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
  const Sizes = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
  ];
  const FSLoop = (length: number) => {
    let array = [];
    for (let n: number = 0; n < length; n++) {
      array.push(
        <Button key={Sizes[n]} height={50} width={50} mobileHeight={50} className={'py-2'}>
          {Sizes[n]}
        </Button>
      );
    }
    return array;
  };
  const [y, setY] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [url, setUrl] = useState(urls[0]);
  return (
    <div className='h-full w-full lg:pl-5 md:pt-6 flex flex-col md:space-y-5'>
      <h5 className='hidden pl-5 md:pl-0 font-[Poppins] space-x-2 h-[20px] items-center md:flex '>
        <span className='text-midnight'>Element 1 </span> <span>{'>'}</span>
        <span className='text-gray-800'>Element 2 </span> <span> {'>'}</span>
        <span className='text-gray-700'>Element 3</span>
      </h5>
      <div className='w-full h-full flex flex-col md:flex-row md:space-x-10 gap-7'>
        <div className='hidden w-[7%] lg:flex h-full space-y-6 flex-col'>
          {urls.map((url) => (
            <div
              key={url}
              className='relative border border-midnight w-[100%] h-[9rem] flex p-2 items-center'
            >
              <Image
                layout='fill'
                objectFit='cover'
                src={url}
                style={{ cursor: 'pointer' }}
                alt='Preview'
                onClick={() => {
                  setUrl(url);
                }}
              />
            </div>
          ))}
        </div>
        <div className='hidden lg:block'>
          <Image
            width={300}
            height={481}
            objectFit='cover'
            src={url}
            alt='Preview'
            className='cursor-crosshair'
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setHovering(false);
              }, 100);
            }}
            onMouseMove={(e) => {
              const { y } = getRelativePos(
                e.clientX,
                e.clientY,
                e.currentTarget
              );
              setY(y);
            }}
          />
   <div className='mt-2 hidden md:flex'>
              <Button mobileWidth={160} fontSize={20} mobileHeight={50} width={151} height={60} fontWeight={500}>Add to cart</Button>
              <Button mobileWidth={160} mobileHeight={50} width={151} height={60} on={true} font='Montserrat' fontWeight={700}>Buy now</Button>
            </div>
        </div>
      <div className='relative w-screen h-[70vh] block lg:hidden'>
        <Swiper
          modules={[Pagination, Keyboard, Mousewheel]}
          effect='slide'
          pagination={{ clickable: true }}
          keyboard
          mousewheel
        >
          {
            urls.map((url)=> (
                 <SwiperSlide key={url}>
            <Image
              layout='fill'
              quality={100}
              objectFit="cover"
              src={
               url
              }
              alt='Preview'
              className='cursor-grab'
            />
          </SwiperSlide>
            ))
          }
         
        </Swiper>
      </div>
      <div className='h-full md:w-[60%] px-5 md:px-0 w-full'>
        <div
          className='h-full w-full space-y-6'
          style={{ display: hovering ? 'none' : 'block' }}
        >
          <div className='space-y-2'>
            <h4
              style={{
                transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
              }}
              className='font-montserrat uppercase text-midnight text-2xl font-[500] tracking-wider'
              aria-label='Title of the product'
            >
              {title}
            </h4>
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
            <div
              className='grid grid-cols-5 md:grid-cols-6 h-full gap-5 mt-5 self-center'
              aria-label='Size grid'
            >
              {FSLoop(size > 10 ? 10 : size)}
            </div>
            <div className='mt-10 space-y-8'>
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
            <div className='my-5 block md:hidden'>
              <Button mobileWidth={160} mobileHeight={50} fontWeight={500} className="text-lg">Add to cart</Button>
              <Button mobileWidth={160} mobileHeight={50} on={true} font='Poppins' fontWeight={700} className="text-lg">Buy now</Button>
            </div>
          </div>
        </div>
        <div
          className='relative h-[30rem] w-[60vw] lg:block hidden'
          style={{ display: hovering ? 'block' : 'none' }}
        >
          <Image
            layout='fill'
            objectPosition={`0 ${y / 4.8}% `}
            objectFit='cover'
            src={url}
            alt=''
          />
        </div>
      </div> </div>
    </div>
  );
};

export default ViewCard;
