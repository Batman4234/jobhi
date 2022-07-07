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
  hover?: boolean;
}

const Button: FC<PropsWithChildren<Props>> = ({ width, height, children, on, onClick , font, fontWeight, mobileWidth, mobileHeight, fontSize, className, mobileFontWeight, mobileFontSize, rounded, hover=true}) => {
  const ButtonCM = styled('button', {
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
      backgroundColor: on ? '#171717' : '#fcfdfc',
      color: on ? '#fcfdfc' : '171717',
    fontFamily: font ? font : 'Poppins',
    fontWeight: fontWeight ? fontWeight : '500',
    '&:hover':  {
      backgroundColor: hover && on ? '#fcfdfc' : `${!hover ? '' : '#171717'}`,
      color: hover && on ? '#171717' : `${!hover ? '' : '#fcfdfc' }`,
    },
    borderRadius: rounded ? rounded : 0,
    width: width ? width : 60,
    height: height ? height : 60,
    // fontSize: fontSize ? fontSize : '1.25rem',
    // lineHeight: '1.75rem',
    '@media only screen and (max-width: 900px)' : {
      width: mobileWidth && mobileWidth || width && width,
    height: mobileHeight && mobileHeight || height && height,
    fontSize: mobileFontSize && mobileFontSize || fontSize && fontSize,
    fontWeight: mobileFontWeight && mobileFontWeight || fontWeight && fontWeight ,
    }
  });
  return (
      <ButtonCM
        type='submit'
        onClick={onClick}
        className={`tracking-widest uppercase border border-midnight shadow-lg rounded-sm ${className}`}
      >
        {children}
      </ButtonCM>
  );
};

export default Button;
