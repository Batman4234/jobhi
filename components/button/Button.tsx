import React, { FC, PropsWithChildren } from 'react';
import { styled } from '@stitches/react';
export interface Props {
  size?: number | string;
  on?: boolean;
  onClick?: React.MouseEventHandler;
}

const Button: FC<PropsWithChildren<Props>> = ({ size, children, on, onClick }) => {
  const ButtonCM = styled('button', {
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
      backgroundColor: on ? '#171717' : '#fcfdfc',
      color: on ? '#fcfdfc' : '171717',
    fontFamily: 'Poppins',
    '&:hover': {
      backgroundColor: '#171717',
      color: '#fcfdfc',
    }
  });
  return (
    <div className='flex'>
      <ButtonCM
        type='submit'
        onClick={onClick}
        className={`py-3 mt-6 tracking-widest uppercase border border-midnight shadow-lg rounded-sm text-lg ${
          size ? `w-[${size}px]` : 'w-[57px]'
        }`}
      >
        {children}
      </ButtonCM>
    </div>
  );
};

export default Button;
