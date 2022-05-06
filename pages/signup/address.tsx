import React, {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
const Index = () => {
  const [value, setValue] = useState('');
  const router = useRouter();
  return (
    <div className='grid min-h-screen place-items-center mt-[37rem] lg:mt-0'>
      <div className='bg-sky w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat]'>
          <div className='flex'>
        <span className='lg:text-2xl text-[70px] font-[Montserrat] tracking-tight uppercase'>
          What should be your address for orders?
        </span>
        <span className='flex ml-2 text-gray-400 text-[40px] lg:text-sm'>private</span> </div>
        <form className='mt-6'>
          <input
            type='text'
            placeholder='London, New York, Berlin, Kasaragod'
            className='block w-full lg:p-3 mt-6 p-6 text-[50px] lg:text-sm lg:mt-2 text-gray-700 bg-sky border border-midnight focus:outline-none rounded-sm'
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
              <button
                type='submit'
                className='w-full py-8 lg:py-3 mt-10 lg:mt-6 pl-20 lg:pl-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm lg:text-lg lg:pr-3 pr-10 text-[50px] text-center'
                onClick={(e) => {
                  e.preventDefault();
                  if (value.trim() !== '') return router.push('/signup/done');
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
