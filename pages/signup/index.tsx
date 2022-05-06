import React from 'react';
import Link from 'next/link';
const Index = () => {
  return (
    <div className='flex mt-64 items-center'>
      <div className='w-full justify-center flex'>
        <Link href='/signup/name'>
          <a>
            <button
              type='submit'
              className='py-3 mt-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm text-lg w-64'
            >
              Start
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
