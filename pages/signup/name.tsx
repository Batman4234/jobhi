import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <div className='grid min-h-screen place-items-center '>
      <div className='bg-sky w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat]'>
        <span className='text-2xl font-[Montserrat] tracking-tight uppercase'>
          What Is your name?
        </span>
        <form className='mt-6'>
          <input
            type='text'
            placeholder='enter your name here'
            className='block w-full p-3 mt-2 text-gray-700 bg-sky border border-midnight focus:outline-none rounded-sm'
            required
          />
          <Link href='/signup/email'>
            <a>
              <button
                type='submit'
                className='w-full py-3 mt-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm text-lg'
              >
                submit
              </button>
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Index;
