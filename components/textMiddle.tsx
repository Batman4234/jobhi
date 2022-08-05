import React from 'react'

export interface Props {
title: string;
}
const TextCenter = (prop:Props) => {
  return (
            <div className='h-[90%] md:h-full absolute left-0 right-0 top-0 bottom-0 w-full grid place-content-center bg-white'>
          <h5 className='font-poppins font-[700] text-2xl text-center md:text-3xl '>
           {prop.title}
          </h5>
        </div>
  )
}

export default TextCenter