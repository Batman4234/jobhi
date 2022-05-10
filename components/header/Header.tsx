import React from 'react';
import { LoginIcon } from '@heroicons/react/outline';
import { UserIcon } from '@heroicons/react/outline';
import { ShoppingBagIcon } from '@heroicons/react/outline';
import styles from '../../styles/Header.module.css';
import Select from './Select';
import Search from './Search';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
import Link from 'next/link';
import { styled } from '@stitches/react';
const BottomBar = styled('div', {
  display: 'flex',
  height: '100%',
  position: 'absolute',
});
const BottomNav = styled('nav', {
  display: 'flex',
});
const Header = () => {
  const login = false;
  return (
    <>
      <header className={`${styles.header}`}>
        <nav className={`${styles.nav} `}>
          <div aria-label='currency' className={styles.select}>
            <Select />
          </div>
          <div aria-label='logo' className={styles.logo}>
            <Link href='/'>
              <a>
                <Logo
                  height={230}
                  width={230}
                  className='md:h-[200px] md:w-[200px] lg:h-[100px] lg:w-[100px] '
                />
              </a>
            </Link>
          </div>
          <div className={styles.icons}>
            <Search />
            <div className='flex items-center mr-1'>
              {login ? (
                <Link href={'/profile'}>
                  <a className='flex'>
                    <button className={styles.button}>
                      <UserIcon
                        height={28}
                        width={28}
                        strokeWidth={1}
                        className={styles.iconButton}
                      />
                    </button>
                  </a>
                </Link>
              ) : (
                <Link href={login ? '/profile' : '/login'}>
                  <a className='flex'>
                    <button className={styles.button}>
                      <LoginIcon
                        height={28}
                        width={28}
                        strokeWidth={1}
                        className={styles.iconButton}
                      />
                    </button>
                  </a>
                </Link>
              )}
            </div>
            <div className='flex items-center lg:ml-3'>
              <Link href={'/cart'}>
                <a className='flex'>
                  <button className={styles.button}>
                    <ShoppingBagIcon
                      height={28}
                      width={28}
                      strokeWidth={1}
                      className={styles.iconButton}
                    />
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
