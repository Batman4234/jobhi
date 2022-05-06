import React, { FC } from 'react';
import Image from 'next/image';
import styles from '../../styles/Card.module.css'
import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';
export interface Props {
  height?: number | string;
  width?: number | string;
  author: string;
  item: string;
  price: string;
  url: string;
  open?: boolean;
}
const ContentDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  zIndex: 30,
  backgroundColor: 'white',
  height: '50vh',
    '@media screen and (max-width: 600px)': {
      width: 600,
      height: 600
  }
});
export interface ClassNames {
  ImageDiv?: string;
  Image?: string;
  ContentDiv?: string;
}
export interface Props {
  classNames?: ClassNames;
  className?: string;
}
const Card: FC<Props> = ({ classNames, className, height, width, author, item, price, url }) => {
  const AuthorH4 = styled('h4', {
  fontFamily: 'Poppins',
  textTransform: 'uppercase',
  fontWeight: 500,
  fontSize: 16.3,
  marginTop: 4,
  marginLeft: 2,
  zIndex: 10,
    '@media screen and (max-width: 600px)': {
    fontSize: 50
  }
});
const ItemH4 = styled('h4', {
  fontFamily: 'Montserrat',
  letterSpacing: '0.050px',
  textTransform: 'capitalize',
  marginLeft: 2,
  color: gray.gray11,
  maxWidth: 230,
  zIndex: 10,
  '@media screen and (max-width: 600px)': {
    fontSize: 40
  }
});
const PriceTag = styled('h4', {
  fontFamily: 'Poppins',
  // fontFamily: 'Montserrat'
  zIndex: 10,
    '@media screen and (max-width: 600px)': {
    fontSize: 50
  }

});
  const ImageDiv = styled('div', {
    position: 'relative',
    marginLeft: '100px',
    height: height ? height : 300,
    width: width ? width : 300,
    '@media screen and (max-width: 600px)': {
      height: 500,
      width: 500
    },
    zIndex: 30,
    borderRadius: '0.5rem'
  });
  return (
    <div className={`flex bg-white z-20 mb-32 lg:mb-56 ${className}`}>
      <ImageDiv
        className={classNames?.ImageDiv}
      >
        <Image
          layout='responsive'
          height={19}
          width={12}
          quality={100}
          objectFit='cover'
          className={`${classNames?.Image} z-0 ${styles.image} hover:scale-105 transition duration-[400ms]`}
          src={
            url
          }
          alt=''
        />
        <ContentDiv className={`${classNames?.ContentDiv}`}>
          <AuthorH4>{author}</AuthorH4>
          <ItemH4>{item}</ItemH4>
          <PriceTag>{price}</PriceTag>
        </ContentDiv>
      </ImageDiv>
    </div>
  );
};

export default Card;
