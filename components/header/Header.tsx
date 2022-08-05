import React, { FC } from 'react';
import { LoginIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import Select from './Select';
import Search from './Search';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@lib/Auth';
const Header: FC = () => {
  const auth = useAuth();
  return (
    <>
      <div className="w-full md:h-[5rem] sticky top-0 flex justify-between items-center pl-[45px] pr-[20px] bg-white z-30 h-[4.555rem]">
        <Select />
        <Link href='/'>
          <a className='flex'>
            <Image
              src={'/logo.svg'}
              width={100}
              height={25}
              alt='Logo Mascot'
              priority={true}
              quality={100}
            />
          </a>
        </Link>
        <div className="flex gap-[15px]">
          <Search />
          <Link href={`${!auth.user ? '/login' : '/profile'}`}>
            <a className='flex'>
              {!auth.user ? (
                <LoginIcon height={25} width={25} strokeWidth={1} />
              ) : (
                <UserIcon height={25} width={25} strokeWidth={1} />
              )}
            </a>
          </Link>
          <Link href='/cart'>
            <a className='flex'>
              <ShoppingBagIcon height={25} width={25} strokeWidth={1} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
