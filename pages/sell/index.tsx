import Image from 'next/image';
import React from 'react';
import styles from '@styles/Sell.module.css';
import Button from '@components/button/Button';
import Link from 'next/link';
const Sell = () => {
  return (
    <>
      <div className='mt-52 md:mt-32'>
        <div className='flex bg-sky border border-midnight py-24 justify-center'>
          <div className='p-12 text-center max-w-2xl'>
            <div className='md:text-3xl text-[5rem] font-[Poppins]'>
              Want To Sell?
            </div>
            <div className='md:text-xl font-normal mt-4 text-[2.4rem]'>
              Don{"'"}t Worry, We Got You Buddy!
            </div>
            <div>
              <Link href='/sell/category'>
                <a>
                  <Button width={200} mobileWidth={500} className='ml-[3.4rem] mt-10 md:mt-5' mobileFontWeight={900} fontWeight={700} on={true}>
                    Get Started
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {
          // Testimonials
        }
      </div>
    </>
  );
};

export default Sell;
