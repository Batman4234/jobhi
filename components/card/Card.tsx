import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  src?: string;
}
const ContentDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '14vh',
  backgroundColor: 'white',
  '@media screen and (max-width: 600px)': {
    width: 600,
    height: 600,
  },
  transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
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
const Card: FC<Props> = ({
  classNames,
  className,
  height,
  width,
  author,
  item,
  price,
  url,
  src = '/items/mens/mande',
}) => {
  const DetailContainer = styled('div', {
    // Margin And Padding
    marginLeft: 2,
    marginTop: 4
  })
  const AuthorH4 = styled('h4', {
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: 16.3,
    '@media screen and (max-width: 600px)': {
      fontSize: 17,
    },
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
  });
  const ItemH4 = styled('h4', {
    fontFamily: 'Montserrat',
    letterSpacing: '0.050px',
    textTransform: 'capitalize',
    color: gray.gray11,
    maxWidth: 230,
    '@media screen and (max-width: 600px)': {
      fontSize: 15,
    },
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
  });
  const PriceTag = styled('h4', {
    fontFamily: 'Poppins',
    // fontFamily: 'Montserrat'
    '@media screen and (max-width: 600px)': {
      fontSize: 17,
    },
    transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
  });
  const LinkA = styled('a', {
    // Background Color
    backgroundColor: 'white',
    // Tablet+ View
    width: 150,
    '@media screen and (min-width: 600px)': {
    // Height And Width
      width: width ? width : 300
    }
  }) 
  return (
    <Link href={src} passHref>
      <LinkA>
        <Image
        layout="responsive"
          height={19}
          width={12}
          quality={100}
          objectFit='cover'
          className={`hover:scale-105`}
          style={{
            transition: 'all 300ms cubic-bezier(.73,.08,.53,.81)',
          }}
          src={url}
          alt=''
        />
        <DetailContainer>        <AuthorH4>{author}</AuthorH4>
        <ItemH4>{item}</ItemH4>
        <PriceTag>{price}</PriceTag></DetailContainer>

      </LinkA>
    </Link>
  );
};

export default Card;
