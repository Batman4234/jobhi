import Button from '@components/button/Button';
import React from 'react';
const SignIndex = () => {
  return (
    <div className='h-[90%] md:h-full absolute left-0 right-0 top-0 bottom-0 w-full grid place-content-center bg-white'>
      <Button
        mobileWidth={260}
        font='Montserrat'
        on={false}
        mobileHeight={60}
        fontWeight={900}
        width={400}
        height={100}
        className='text-lg'
      >
        Let&apos;s get started
      </Button>
    </div>
  );
};

export default SignIndex;
