import React from 'react';
import {
  HomeIcon,
  SearchIcon,
  StarIcon,
  UserIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

const BottomNavigation = () => {
  return (
    <div className='flex justify-between items-center fixed bottom-0 w-full border border-gray-300 h-60 md:hidden bg-white z-50 px-16'>
      <Link href='/'>
        <a className='flex'>
          <HomeIcon strokeWidth={1} height={100} width={100} />
        </a>
      </Link>
      <Link href='/search/mobile'>
        <a className='flex'>
          <SearchIcon strokeWidth={1} height={100} width={100} />
        </a>
      </Link>
      <div className='flex'>
        <StarIcon strokeWidth={1} height={100} width={100} />
      </div>
      <Link href={'/profile'}>
        <a className='flex'>
          <UserIcon strokeWidth={1} height={100} width={100} />
        </a>
      </Link>
    </div>
  );
};

export default BottomNavigation;
