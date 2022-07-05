import React, { FC, useState } from 'react';
import Image from 'next/image';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';
import Button from '@components/button/Button';
import Cloth from '@public/Cloth.svg';
import { ColorSwatchIcon as Color } from '@heroicons/react/solid';
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
  urls
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
    for (let n:number = 0; n < length; n++) {
      array.push(
        <Button key={Sizes[n]} height={70} width={50} className={'py-2'}>
        {Sizes[n]}
      </Button>
      );
    }
    return array;
  };
  const [y, setY] = useState(0);
  const [hovering, setHovering] = useState(true);
  const [url, setUrl] = useState(urls[0]);
  return (
    <div className='h-full w-full pl-5 pt-6 space-y-5 flex flex-col'>
      <h5 className='font-[Poppins] space-x-2 h-[20px] items-center flex '>
        <span className='text-midnight'>Element 1 </span> <span>{'>'}</span>
        <span className='text-gray-800'>Element 2 </span> <span> {'>'}</span>
        <span className='text-gray-700'>Element 3</span>
      </h5>
      <div className='w-full h-full flex space-x-10'>
        <div className='hidden w-[7%] lg:flex h-full space-y-6 flex-col'>
          { urls.map((url)=> 
          (
            <div key={url} className='relative border border-midnight w-[100%] h-[9rem] flex p-2 items-center'>
              <Image
              layout="fill"
                objectFit='cover'
                src={url}
                style={{cursor: 'pointer'}}
                alt='Preview'
                onClick={() => {
                  setUrl(url);
                }}
              />
            </div>
          ))}
        </div>
        <div>
          <Image
            width={300}
            height={481}
            objectFit='cover'
            src={
              url
            }
            alt='Preview'
            className="cursor-crosshair"
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
        </div>
        <div className='h-full w-[60%]'>
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
            <div>
              <h5 className='font-poppins text-xl flex items-center gap-2'>
                Select your size
                <span className='text-xs cursor-pointer'>What&apos;s your size?</span>
              </h5>
              <div
                className='grid grid-cols-8 h-full justify-evenly gap-5 mt-5'
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
            </div>
          </div>
          <div
            className='relative h-[30rem] w-[60vw]'
            style={{ display: hovering ? 'block' : 'none' }}
          >
            <Image
            layout="fill"
              objectPosition={`0 ${y / 4.8}% `}
              objectFit='cover'
              src={
               url
              }
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
