import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Index = () => {
  return (
    <div className='flex items-center justify-center md:mt-32 mt-96'>
      <div className='w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat]'>
        <span className='lg:text-2xl text-[100px] font-[Montserrat] tracking-tight uppercase' style={{
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
        }}>
          welcome back!
        </span>
        <form className='mt-6'>
          <div>
            <label
              htmlFor='email'
              className='block lg:text-xs text-[30px] font-medium text-gray-600 uppercase tracking-wide '
              style={{transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',}}
            >
              E-mail
            </label>
            <input
              id='email'
              type='email'
              name='email'
              placeholder='support@jobhi.com'
              className='block w-full lg:p-3 mt-6 p-6 text-[40px] lg:text-sm lg:mt-2 text-gray-700 bg-sky border border-midnight focus:outline-none rounded-sm'
              style={{transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',}}
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block md:mt-2 text-[30px] mt-8 lg:text-xs font-medium text-midnight uppercase'
              style={{transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',}}
            >
              Password
            </label>
            <input
              id='password'
              type='password'
              name='password'
              placeholder='********'
              className='flex items-center mb-10 w-full lg:p-3 p-6 mt-8 text-[40px] lg:text-sm lg:mt-2 text-gray-700 focus:outline-none bg-sky border border-midnight rounded-sm'
              style={{transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',}}
            />
          </div>
          <div>
            <button
              type='submit'
              className='w-full py-8 lg:py-3 mt-6 pl-20 lg:pl-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm lg:text-lg text-[50px] text-center'
              style={{transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',}}
            >
              Login
            </button>
          </div>
          <div className='justify-between flex'>
            <Link href='/signup'>
              <a>
                <button className='flex text-[30px] mt-10 w-64 lg:mt-4 lg:text-xs lg:w-32 text-midnight cursor-pointer hover:text-gray-800 capitalize transition' style={{transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',}}>
                  Create An Account.
                </button>
              </a>
            </Link>

            <button style={{transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',}} className='flex text-[30px] mt-10 w-58 lg:mt-4 lg:text-xs lg:w-28 text-gray-500 cursor-pointer hover:text-midnight capitalize transition'>
              Forgot password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
