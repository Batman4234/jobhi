import React, {useState} from 'react';
import Link from 'next/link';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
const Index = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='grid min-h-screen place-items-center '>
      <div className='bg-sky w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat]'>
        <span className='text-2xl font-[Montserrat] tracking-tight uppercase'>
          Enter A Password
        </span>
        <form className='mt-6'>
            <div className="flex w-full p-3 mt-2 text-gray-700 focus:outline-none bg-sky border border-midnight rounded-sm items-center">
          <input
            type={open ? 'text' : 'password'}
            placeholder='********'
            className='w-full text-gray-700 focus:outline-none bg-sky rounded-sm'
          /> 
          <div className='mr-1'>
              <button className="flex" onClick={(e)=> {
                  e.preventDefault()
                  setOpen(!open)}}>
                      {open ? <EyeIcon height={24} width={24} strokeWidth={1}/>: <EyeOffIcon height={24} width={24} strokeWidth={1}/> }
          </button>
          </div>
          </div>
          <Link href='/signup/address'>
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
