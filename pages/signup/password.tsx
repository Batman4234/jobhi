import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
const Index = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const router = useRouter();
  return (
    <div className='grid min-h-screen place-items-center mt-[37rem] lg:mt-0'>
      <div className='bg-sky w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat]'>
      <span className='lg:text-2xl text-[70px] font-[Montserrat] tracking-tight uppercase'>
          Enter A Password
        </span>
        <form className='mt-6'>
          <div className='flex w-full p-3 mt-2 text-gray-700 focus:outline-none bg-sky border border-midnight rounded-sm items-center'>
            <input
              type={open ? 'text' : 'password'}
              placeholder='********'
              
              onChange={(e) => {
                setValue(e.target.value);
              }}
              // className='w-full text-gray-700 bg-sky rounded-sm focus:outline-none lg:p-0 mt-6 lg:mt-0 p-6'
              className='w-full lg:p-0 mt-6 p-6 text-[50px] lg:text-base lg:mt-0 text-gray-700 bg-sky  focus:outline-none rounded-sm'
            />
            <div className='mr-1'>
              <button
                type='button'
                className='flex'
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(!open);
                }}
              >
                {open ? (
                  <EyeIcon className="h-[80px] w-[80px] lg:h-[24px] lg:w-[24px]" strokeWidth={0.7} />
                ) : (
                  <EyeOffIcon className="h-[80px] w-[80px] lg:h-[24px] lg:w-[24px]" strokeWidth={0.7} />
                )}
              </button>
            </div>
          </div>
          <button
            type='submit'
            className='w-full py-8 lg:py-3 mt-10 lg:mt-6 pl-20 lg:pl-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm lg:text-lg lg:pr-3 pr-10 text-[50px] text-center'
            onClick={(e) => {
              e.preventDefault();
              if (value.trim() !== '') return router.push('/signup/address');
            }}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
