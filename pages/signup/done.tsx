import React from 'react'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
const Done = () => {
    const router = useRouter();
    setTimeout(()=> {
        router.push('/')
    }, 5 * 1000)
  return (
<div className='grid min-h-screen place-items-center '>
      <div className='bg-sky w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat] flex justify-center items-center gap-5'>
        <span className='flex text-[70px] font-[Montserrat] tracking-tight font-extralight uppercase'>
          Done
        </span>
        <span className='flex'><ThumbUpIcon width={70} height={70} strokeWidth={0.5} /></span>
        </div>
        </div>
  )
}

export default Done