import React, { FC } from 'react';
import Image from 'next/image';
import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';
const ImageDiv = styled('div', {
  width: '230px',
  height: '50px',
  position: 'relative',
  marginLeft: '100px',
});
const AuthorH4 = styled('h4', {
  fontFamily: 'Poppins',
  textTransform: 'uppercase',
  fontWeight: 500,
  fontSize: 16.3,
  marginTop: 4,
  marginLeft: 2,
});
const ItemH4 = styled('h4', {
  fontFamily: 'Montserrat',
  letterSpacing: '0.050px',
  textTransform: 'capitalize',
  marginLeft: 2,
  color: gray.gray11,
  maxWidth: 230,
});
const PriceTag = styled('h4', {
  fontFamily: 'Poppins',
  // fontFamily: 'Montserrat'
});
const ContentDiv = styled('div', {});
export interface ClassNames {
  div?: string;
  ImageDiv?: string;
  Image?: string;
  ContentDiv?: string;
}
export interface Props {
  classNames?: ClassNames;
}
const Card: FC<Props> = ({classNames}) => {
  return (
    <div className={`flex my-4 ${classNames?.div}`}>
      <ImageDiv className={classNames?.ImageDiv}>
        <Image
          layout='responsive'
          height={19}
          width={12}
          quality={100}
          objectFit='cover'
          className={classNames?.Image}
          src={
            'https://img.perniaspopupshop.com/catalog/product/b/m/BMKC042234_1.jpg?impolicy=listingimagenew'
          }
          alt=''
        />
        <ContentDiv className={classNames?.ContentDiv}>
          <AuthorH4>Bhumika Sharma</AuthorH4>
          <ItemH4>Captain America T-Shirt</ItemH4>
          <PriceTag>100$</PriceTag>
        </ContentDiv>
      </ImageDiv>
    </div>
  );
};

export default Card;
