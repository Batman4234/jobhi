import React from 'react';
import Link from 'next/link';
const Index = () => {
  return (
    <div className='grid min-h-screen place-items-center'>
      <div className='bg-sky w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat] flex flex-col justify-center'>
        <span className='text-2xl font-[Montserrat] tracking-tight uppercase justify-center flex '>
         Be Ready as always !
        </span>
        <Link href='/signup/name'>
          <a>
            <button
              type='submit'
              className='py-3 mt-6 tracking-widest ml-[6.6rem] text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm text-lg w-64'
            >
              Start
            </button>
          </a>
        </Link>
        <Link href="/login">
            <a className='flex'>
              <button type="button" className='flex justify-center ml-28 mt-8 text-xs w-40 text-midnight cursor-pointer hover:text-gray-800 capitalize transition'>
              Already Have An Account?
            </button>
            </a>
            </Link>
      </div>
    </div>
  );
};

export default Index;
