import React from 'react';
import Link from 'next/link';
const Index = () => {
  return (
    <div className='grid min-h-screen place-items-center lg:mt-0 mt-[40rem]'>
      <div className='bg-white w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat]'>
        <span className='text-left text-[56px] lg:text-2xl font-[Montserrat] tracking-tight uppercase '>
         Be Ready as always !
        </span>
        <Link href='/signup/name'>
          <a>
            <button
              type='submit'
              className='w-full py-8 lg:py-3 mt-6 pl-20 lg:pl-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm lg:text-lg text-[50px] text-center'
            >
              Start
            </button>
          </a>
        </Link>
        <Link href="/login">
            <a className='flex'>
              <button type="button" className='flex justify-center text-[30px] w-96 text-left mt-8 lg:text-xs lg:w-40 text-midnight cursor-pointer hover:text-gray-800 capitalize transition'>
              Already Have An Account?
            </button>
            </a>
            </Link>
      </div>
    </div>
  );
};

export default Index;
