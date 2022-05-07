import React from 'react';
import Image from 'next/image';
import { styled } from '@stitches/react';
import { useState } from 'react';
import magnify from 'react-image-magnify';
const AllDiv = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
});
const SecondDiv = styled('div', {
  marginTop: '9%',
});
const HeaderDiv = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,
  width: '100%',
  marginLeft: '3%',
});
const BreadCrumb = styled('h5', {
  color: '#5A5555',
  fontFamily: 'Poppins',
  letterSpacing: '1.3px',
  padding: '0 15px',
});
const ButtonBread = styled('button', {
  '&:hover': {
    color: '#171717',
  },
  margin: '0 10px',
});
const ImageDiv = styled('div', {});
const CardDiv = styled('div', {
  padding: '10px 12px 6px 12px',
  position: 'relative',
  top: '40px',
  width: 70,
  backgroundColor: 'white',
  border: '1px solid #171717',
  marginBottom: '20px',
});
const Images = styled(Image, {
  backgroundColor: '#d7e1ec',
  backgroundImage: 'linear-gradient(315deg, #d7e1ec 0%, #ffffff 74%)',
  display: 'flex',
  justifyContent: 'center',
  padding: '0',
  alignItems: 'center',
});
const BiggerImageDiv = styled('div', {
  display: 'flex',
  marginLeft: '11%',
  marginTop: '3%',
  position: 'absolute',
});
const ImagesDiv = styled('div', {
  cursor: 'crosshair',
});
const Imaage = styled(Image, {
  backgroundColor: '#d7e1ec',
  backgroundImage: 'linear-gradient(315deg, #d7e1ec 0%, #ffffff 74%)',
});
const ImageButton = styled('button', {
  display: 'flex',
  marginLeft: '2%',
});
const ThirdDiv = styled('div', {
  position: 'absolute',
  marginLeft: '36%',
  marginTop: '3%',
});

const ViewCard = () => {
  const [eX, setEX] = useState(0);
  const [eY, setEY] = useState(0);
  const [url, setUrl] = useState(
    'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_1.jpg?impolicy=detailimageprod'
  );
  const [hov, setHov] = useState(false);
  const Imaages = styled(Image, {
    pointerEvents: 'none',
    transform: 'scale(1.7)',
    objectPosition: `0 ${eY / 12 }% `,
});
const ImaagesDiv = styled('div', {
})
  return (
    <AllDiv>
      <SecondDiv>
        <HeaderDiv>
          <BreadCrumb>
            <ButtonBread type='button' title='Mens'>
              Mens
            </ButtonBread>
            &gt;
            <ButtonBread type='button' title='Rock'>
              Rock
            </ButtonBread>
            &gt;
            <ButtonBread type='button' title='WitF'>
              WitF
            </ButtonBread>
          </BreadCrumb>
        </HeaderDiv>
        <ThirdDiv >
          <ImaagesDiv>
            <Imaages
              width={800}
              height={480}
              objectFit='cover'
              src={`${url}`}
              alt='Url'
            />
          </ImaagesDiv>
        </ThirdDiv>
        <BiggerImageDiv>
          <ImagesDiv>
            <Imaage
              onMouseEnter={() => setHov(true)}
              onMouseLeave={() => setHov(false)}
              onMouseMove={()=> {

              }}
              width={320}
              id="imagg"
              height={480}
              objectFit='cover'
              quality={100}
              priority={true}
              src={`${url}`}
              alt=''
              className=''
            />
          </ImagesDiv>
        </BiggerImageDiv>
        <ImageDiv>
          <ImageButton
            onClick={() => {
              setUrl(
                'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_1.jpg?impolicy=detailimageprod'
              );
            }}
          >
            <CardDiv>
              <Images
                width={50}
                height={90}
                quality={20}
                objectFit='cover'
                src={
                  'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_1.jpg?impolicy=detailimageprod'
                }
                alt=''
                className=''
              />
            </CardDiv>
          </ImageButton>
          <ImageButton
            onClick={() => {
              setUrl(
                'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_2.jpg?impolicy=detailimageprod'
              );
            }}
          >
            <CardDiv>
              <Images
                width={50}
                height={90}
                quality={20}
                objectFit='cover'
                src={
                  'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_2.jpg?impolicy=detailimageprod'
                }
                alt=''
                className=''
              />
            </CardDiv>
          </ImageButton>
          <ImageButton
            onClick={() => {
              setUrl(
                'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_3.jpg?impolicy=detailimageprod'
              );
            }}
          >
            <CardDiv>
              <Images
                width={50}
                height={90}
                objectFit='cover'
                quality={20}
                src={
                  'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_3.jpg?impolicy=detailimageprod'
                }
                alt=''
                className=''
              />
            </CardDiv>
          </ImageButton>
          <ImageButton
            onClick={() => {
              setUrl(
                'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_4.jpg?impolicy=detailimageprod'
              );
            }}
          >
            <CardDiv>
              <Images
                width={50}
                quality={20}
                height={90}
                objectFit='cover'
                src={
                  'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_4.jpg?impolicy=detailimageprod'
                }
                alt=''
                className=''
              />
            </CardDiv>
          </ImageButton>
        </ImageDiv>
      </SecondDiv>
    </AllDiv>
  );
};
// exp
// function getRelativePos<PropsPos>({ clientX,clientY ,currentTarget }){
//     const { left,top } = currentTarget.getBoundClientRect()
//     return {
//       x: clientX-left,
//       y: clientY-top
//     }
//   }