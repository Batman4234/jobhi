import React, { FC, PropsWithChildren } from 'react';
import { styled } from '@stitches/react';
export interface Props {
  width?: number | string;
  height?: number | string;
  on?: boolean;
  onClick?: React.MouseEventHandler;
  font?: string;
  fontWeight?: number | string;
  mobileWidth?: number | string;
  mobileHeight?: number | string;
  fontSize?: number | string;
  mobileFontSize?: number | string;
  mobileFontWeight?: number | string;
}

const Button: FC<PropsWithChildren<Props>> = ({ width, height, children, on, onClick , font, fontWeight, mobileWidth, mobileHeight, fontSize, mobileFontWeight, mobileFontSize}) => {
  const ButtonCM = styled('button', {
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
      backgroundColor: on ? '#171717' : '#fcfdfc',
      color: on ? '#fcfdfc' : '171717',
    fontFamily: font ? font : 'Poppins',
    fontWeight: fontWeight ? fontWeight : '500',
    '&:hover': {
      backgroundColor: on ? '#fcfdfc' : '#171717',
      color: on ? '#171717' : '#fcfdfc',
    },
    width: width ? width : 100,
    '@media only screen and (max-width: 900px)' : {
    width: mobileWidth ? mobileWidth : 160,
    height: mobileHeight ? mobileHeight : 120,
    fontSize: mobileFontSize ? mobileFontSize : 60,
    fontWeight: mobileFontWeight ? mobileFontWeight : 500
    }
  });
  return (
    <div className='flex'>
      <ButtonCM
        type='submit'
        onClick={onClick}
        className={`py-3 mt-6 tracking-widest uppercase border border-midnight shadow-lg rounded-sm text-lg`}
      >
        {children}
      </ButtonCM>
    </div>
  );
};

export default Button;
