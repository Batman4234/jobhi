import React from 'react';
import { PersonIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import styles from '../../styles/Header.module.css';
import Select from './Select';
import Search from './Search';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div aria-label='currency' className={styles.select}>
          <Select />
        </div>
        <div aria-label='logo' className={styles.logo}>
          <Image width={100} height={100} src={Logo} alt='Logo For JOBHI' />
        </div>
        <div className={styles.icons}>
         <div>
            <Search/>
          </div>
          <div>
            <button className={styles.button}>
              <PersonIcon height={20} width={20} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
