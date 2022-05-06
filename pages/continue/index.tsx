import React from 'react';
import Image from 'next/image';

const index = () => {
  return (
    <div className='grid min-h-screen place-items-center '>
      <div className='bg-sky w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat]'>
        <span className='text-2xl font-[Montserrat] tracking-tight uppercase'>
          welcome back!
        </span>
        <form className='mt-6'>
            <div>

           
          <label
            htmlFor='email'
            className='block text-xs font-medium text-gray-600 uppercase tracking-wide '
          >
            E-mail
          </label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='support@jobhi.com'
            className='block w-full p-3 mt-2 text-gray-700 bg-sky border border-midnight focus:outline-none rounded-sm'
            required
          /> </div>
          <div>

         
          <label
            htmlFor='password'
            className='block mt-2 text-xs font-medium text-midnight uppercase'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            placeholder='********'
            className='block w-full p-3 mt-2 text-gray-700 focus:outline-none bg-sky border border-midnight rounded-sm'
          /> </div>
          <div>

          
          <button
            type='submit'
            className='w-full py-3 mt-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm text-lg'
          >
            Login
          </button></div>
          <div>

         
          <button className='flex justify-between mt-4 text-xs w-28 text-gray-500 cursor-pointer hover:text-midnight capitalize transition'>
            Forgot password?
          </button> </div>
        </form>
      </div>
    </div>
  );
};

export default index;
