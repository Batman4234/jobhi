import React from 'react';
import { UserIcon } from '@heroicons/react/outline';
import { ShoppingBagIcon } from '@heroicons/react/outline';
import styles from '../../styles/Header.module.css';
import Select from './Select';
import Search from './Search';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
import { styled } from '@stitches/react';
const BottomBar = styled('div', {
  display: 'flex',
  height: '100%',
  position: 'absolute',
})
const BottomNav = styled('nav', {
  display: 'flex',

})
const Header = () => {
  return (
    <>
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} `}>
        <div aria-label='currency' className={styles.select}>
          <Select />
        </div>
        <div aria-label='logo' className={styles.logo}>
          <Image src={Logo} height={300} width={300} alt='Logo For JOBHI' />
        </div>
        <div className={styles.icons}>
            <Search/>
          <div className='flex items-center mr-1'>
            <button className={styles.button}>
              <UserIcon height={28} width={28} strokeWidth={1} className={styles.iconButton} />
            </button>
            
          </div>
          <div className="flex items-center lg:ml-3">
            <button className={styles.button}>
              <ShoppingBagIcon height={28} width={28} strokeWidth={1} className={styles.iconButton} />
            </button></div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;
