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
  className?: string;
  rounded?: number | string;
}

const Button: FC<PropsWithChildren<Props>> = ({ width, height, children, on, onClick , font, fontWeight, mobileWidth, mobileHeight, fontSize, className, mobileFontWeight, mobileFontSize, rounded}) => {
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
    borderRadius: rounded ? rounded : 0,
    width: width ? width : 50,
    '@media only screen and (max-width: 900px)' : {
      width: mobileWidth && mobileWidth || width && width || 200,
    height: mobileHeight && mobileHeight || height && height || 80,
    fontSize: mobileFontSize && mobileFontSize || fontSize && fontSize || 25,
    fontWeight: mobileFontWeight && mobileFontWeight || fontWeight && fontWeight || 700,
    }
  });
  return (
      <ButtonCM
        type='submit'
        onClick={onClick}
        className={`py-3 tracking-widest uppercase border border-midnight shadow-lg rounded-sm text-lg ${className}`}
      >
        {children}
      </ButtonCM>
  );
};

export default Button;
