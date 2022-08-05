import Button from '@components/button/Button';
import React, { FC } from 'react';
export interface Props {
   containerClassName?: string;
   onClick?: React.MouseEventHandler;
   title?: string
}
const SignIndex:FC<Props> = (prop: Props) => {
  return (
    <div className={`${prop.containerClassName ? prop.containerClassName : ''} h-full md:pb-10 md:h-full absolute left-0 right-0 top-0 bottom-0 w-full grid place-content-center bg-white`}>
      <Button
        mobileWidth={260}
        font='Montserrat'
        onClick={prop.onClick}
        on={false}
        mobileHeight={60}
        fontWeight={900}
        width={400}
        height={100}
        className='text-xl md:text-2xl'

      >
        {prop.title ? prop.title : "Let's get started"}
      </Button>
    </div>
  );
};

export default SignIndex;
