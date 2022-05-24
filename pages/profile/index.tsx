import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const [value, setValue] = useState('');
  const router = useRouter();
  return (
    <div className='grid min-h-screen place-items-center mt-[37rem] lg:mt-0'>
      <div className='bg-white w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 mt-[3rem] font-[Montserrat]'>
        <form className='mt-6 space-y-10'>
          <div>
            <label
              htmlFor='name'
              className='block lg:text-xs text-[30px] font-medium uppercase tracking-wide text-gray-400 '
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
            >
              NAME
            </label>
            <input
              type='text'
              disabled
              id='name'
              name='name'
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
              placeholder={`yora sokasha`}
              className='block w-full lg:p-3 mt-6 p-6 text-[50px] capitalize lg:text-sm lg:mt-2 text-gray-700 bg-sky border border-midnight focus:outline-none rounded-sm'
            />
          </div>
          <div>
            <label
              htmlFor='nickname'
              className='block lg:text-xs text-[30px] font-medium text-midnight uppercase tracking-wide '
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
            >
              NICKNAME
            </label>
            <input
              type='text'
              id='nickname'
              name='nickname'
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
              placeholder={`yoras`}
              className='block w-full lg:p-3 mt-6 p-6 text-[50px] lg:text-sm capitalize lg:mt-2 text-gray-700 bg-sky border border-midnight focus:outline-none rounded-sm'
            />
          </div>
          <div>
            <label
              htmlFor='phone'
              className='block lg:text-xs text-[30px] font-medium text-gray-400 uppercase tracking-wide '
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
            >
              PHONE
            </label>
            <input
              disabled
              type='number'
              name='phone'
              id='phone'
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
              placeholder={`Enter your phone number here`}
              className='block w-full lg:p-3 mt-6 p-6 text-[50px] lg:text-sm lg:mt-2 text-gray-700 bg-sky border border-midnight focus:outline-none rounded-sm'
            />
          </div>
          <div>
            <label
              htmlFor='address'
              className='block lg:text-xs text-[30px] font-medium text-midnight uppercase tracking-wide '
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
            >
              address
            </label>
            <input
              type='text'
              name='address'
              id='address'
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
              placeholder={`Yoras mahal, Kasaragod, London, Beizel`}
              className='block w-full lg:p-3 mt-6 p-6 text-[50px] lg:text-sm lg:mt-2 bg-sky border border-midnight focus:outline-none rounded-sm capitalize'
            />
          </div>
          <div>
            <button
              type='submit'
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
              className='w-full py-8 lg:py-3 lg:mt-6 pl-20 lg:pl-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm lg:text-lg lg:pr-3 pr-10 text-[50px] text-center'
              onClick={(e) => {
                e.preventDefault();
                if (value.trim() !== '') return router.push('/sign/done');
              }}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
