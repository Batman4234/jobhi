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
    <div className='flex fixed bottom-0 w-full border border-gray-300 h-60 md:hidden'>
        <Link href='/'>
          <a className='mt-10 ml-32'>
            <HomeIcon strokeWidth={1} height={100} width={100} />
          </a>
        </Link>
      <Link href="/search">
      <a className='mt-10 ml-52'> 
        <SearchIcon strokeWidth={1} height={100} width={100} /></a>
      </Link>
      <div className='mt-10 ml-52'>
        <StarIcon strokeWidth={1} height={100} width={100} />
      </div>
      <div className='mt-10 ml-52'>
        <UserIcon strokeWidth={1} height={100} width={100} />
      </div>
    </div>
  );
};

export default BottomNavigation;
