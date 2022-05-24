import React, {useState} from 'react';
import { ThumbUpIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
const Done = () => {
    const router = useRouter();
    setTimeout(()=> {
        router.push('/')
    }, 3 * 1000)
  return (
<div className='grid min-h-screen place-items-center lg:mt-0 mt-[900px]'>
      <div className='bg-sky w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat] grid place-items-start'>
        <div className='flex items-center ml-24 gap-10 lg:gap-2'>
        <span style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)', }}className='flex text-[250px] lg:text-[70px] font-[Montserrat] tracking-tight font-extralight uppercase'>
          Done
        </span>
        <span className='flex' style={{transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',}}><ThumbUpIcon className="lg:h-[70px] lg:w-[70px] h-[200px] w-[200px] " strokeWidth={0.5} /></span> </div>
        </div>
        </div>
  )
}

export default Done