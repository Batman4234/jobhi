import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { styled } from '@stitches/react';
import { useState } from 'react';
import { gray } from '@radix-ui/colors';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import Button from 'components/button/Button';
import { ColorSwatchIcon, HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartFilledIcon } from '@heroicons/react/solid';
import Truck from '@public/DeliveryTruck.svg';
import Cloth from '@public/Cloth.svg';
const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: gray.gray11,
  '&[data-orientation=horizontal]': {
    height: 1,
    width: '50vw',
    marginTop: '30px',
    '@media only screen and (max-width: 900px)': {
      width: 900,
    },
  },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});
export const Separator = StyledSeparator;
const AllDiv = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  // overflowX: 'hidden',
  '@media only screen and (max-width:900px)': {
    marginTop: '30vh',
  },
});
const SecondDiv = styled('div', {
  marginTop: '9%',
  '@media only screen and (max-width:600px)': {
    marginTop: '1%`',
  },
});
const HeaderDiv = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,
  width: '100%',
  marginLeft: '3%',
  display: 'flex',
  '@media only screen and (max-width:600px)': {},
});
const BreadCrumb = styled('h5', {
  color: '#5A5555',
  fontFamily: 'Poppins',
  letterSpacing: '1.3px',
  padding: '0 15px',
  '@media only screen and (max-width:600px)': {
    fontSize: 30,
    display: 'none',
  },
});
const ButtonBread = styled('button', {
  '&:hover': {
    color: '#171717',
  },
  margin: '0 10px',
  transition: 'all 300ms cubic-bezier(.73,.08,.53,.81)',
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
  '@media only screen and (max-width:600px)': {
    marginBottom: 100,
    height: '180px',
    width: '140px',
    paddingTop: 40,
  },
});
const Images = styled(Image, {
  backgroundColor: '#d7e1ec',
  backgroundImage: 'linear-gradient(315deg, #d7e1ec 0%, #ffffff 74%)',
  display: 'flex',
  justifyContent: 'center',
  padding: '0',
  alignItems: 'center',
  '@media only screen and (max-width:600px)': {},
});
const BiggerImageDiv = styled('div', {
  display: 'flex',
  marginLeft: '11%',
  marginTop: '3%',
  position: 'absolute',
  '@media only screen and (max-width:600px)': {
    marginTop: '5%',
    marginLeft: '250px',
  },
});
const ImagesDiv = styled('div', {
  cursor: 'crosshair',
  border: '1px solid #171717',
  height: '480px',
  width: '320px',
  '@media only screen and (max-width:900px)': {
    height: 1600,
    width: 800,
  },
});
const Imaage = styled(Image, {});
const ImageButton = styled('button', {
  display: 'flex',
  marginLeft: '2%',
  '@media only screen and (max-width:600px)': {
    marginLeft: '50px',
  },
});
const ThirdDiv = styled('div', {
  position: 'absolute',
  marginLeft: '36%',
  marginTop: '3%',
  '@media only screen and (max-width:600px)': {
    marginTop: '1800px',
    marginLeft: 0
  },
});
const AuthorH4 = styled('button', {
  fontFamily: 'Poppins',
  letterSpacing: 1.3,
  textTransform: 'uppercase',
  fontSize: 25,
  transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
  '&:hover': {
    color: '#5A5555',
  },
  '@media only screen and (max-width: 900px)': {
    fontSize: 100,
  },
});
const ItemP = styled('h5', {
  fontFamily: 'Montserrat',
  transition: 'all 200ms cubic-bezier(.73,.08,.53,.81)',
  marginTop: '10px',
  color: '#5A5555',
  '&:hover': {
    color: '#171717',
  },
  '@media only screen and (max-width: 900px)': {
    fontSize: 80,
  },
});
const PriceH3 = styled('h3', {
  fontFamily: 'Poppins',
  transition: 'all 200ms cubic-bezier(.73,.08,.53,.81)',
  marginTop: '20px',
  color: '#171717',
  '&:hover': {
    color: '#5A5555',
  },
  '@media only screen and (max-width: 900px)': {
    fontSize: 110,
  },
});
const SizeH4 = styled('h4', {
  transition: 'all 200ms cubic-bezier(.73,.08,.53,.81)',
  fontFamily: 'Poppins',
  fontSize: 20,
  '@media only screen and (max-width: 900px)': {
    fontSize: 70,
    width: 800,
  },
});
const SizeButton = styled('button', {
  fontSize: 12,
  marginLeft: 14,
  fontFamily: 'Montserrat',
  transition: 'all 200ms cubic-bezier(.73,.08,.53,.81)',
  '@media only screen and (max-width: 900px)': {
    fontSize: 40,
    marginLeft: 0,
  },
});
const ItemH4 = styled('h4', {
  display: 'flex',
  gap: 20,
  fontFamily: 'Poppins',
  letterSpacing: '0px',
  '@media only screen and (max-width: 600px)': {
    fontSize: 70,
  },
});
const ItemDesc = styled('p', {
  color: '#5A5555',
  display: 'flex',
  fontSize: 15,
  fontFamily: 'Montserrat',
  width: 540,
  '@media only screen and (max-width: 900px)': {
    fontSize: 50,
    width: 900,
  },
});
const LikeButton = styled('button', {
  marginLeft: '65%',
});
function getRelativePos(clientX: number, clientY: number, currentTarget: any) {
  const { left, top } = currentTarget.getBoundingClientRect();
  return {
    x: clientX - left,
    y: clientY - top,
  };
}
const ViewCard = () => {
  const [eY, setEY] = useState(0);
  const liked = true;
  const [url, setUrl] = useState(
    'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_1.jpg?impolicy=detailimageprod'
  );
  const [hov, setHov] = useState(false);
  const [size, setSize] = useState('XS');
  const Imaages = styled(Image, {
    pointerEvents: 'none',
    objectPosition: `0 ${eY / 4.8}% `,
    '@media only screen and (max-width:900px)': {},
  });
  const ImaagesDiv = styled('div', {});
  return (
    <AllDiv>
      <SecondDiv>
        <HeaderDiv>
          <BreadCrumb>
            <ButtonBread type='button' title='Mens'>
              Mens
            </ButtonBread>
            &gt;
            <ButtonBread type='button' title='Jimmy Kaka'>
              Jimmy Kaka
            </ButtonBread>
            &gt;
            <ButtonBread type='button' title='Jojo Apten'>
              Jojo Apten
            </ButtonBread>
          </BreadCrumb>
          <div className={`flex lg:hidden ml-[1100px] mt-[3%]`}>
            {liked ? (
              <LikeButton>
                <HeartFilledIcon height={100} width={100} strokeWidth={1} />
              </LikeButton>
            ) : (
              <LikeButton>
                <HeartIcon height={100} width={100} strokeWidth={1} />
              </LikeButton>
            )}
          </div>
        </HeaderDiv>
        <ThirdDiv className={`hidden lg:${hov ? 'flex' : 'hidden'}`}>
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
        <ThirdDiv className={`flex lg:${hov ? 'hidden' : 'flex'}`}>
          <div className='ml-0 md:ml-32 '>
            <AuthorH4>Jimmy Kaka</AuthorH4>
            {liked ? (
              <LikeButton>
                <HeartFilledIcon
                  height={30}
                  width={30}
                  strokeWidth={1}
                  className='hidden lg:flex'
                />
              </LikeButton>
            ) : (
              <LikeButton>
                <HeartIcon
                  height={30}
                  width={30}
                  strokeWidth={1}
                  className='hidden lg:flex'
                />
              </LikeButton>
            )}
            <ItemP>Jojo Apten</ItemP>
            <PriceH3>₹10,000</PriceH3>
            <p className='font-[Poppins] text-[60px] lg:text-xs text-[#5A5555]'>
              including all the taxes
            </p>
            <Separator css={{ margin: '15px 0' }} />
            <div className='mt-7'>
              <div className='flex'>
                <SizeH4>Select Your Size</SizeH4>
                <Link href='/men/sizes'>
                  <a className='flex'>
                    <SizeButton>What Is Your Size?</SizeButton>
                  </a>
                </Link>
              </div>
              <div className='grid grid-cols-4 mt-10 lg:mt-0 gap-5 lg:grid-cols-8 '>
                <div>
                  <Button
                    width='57px'
                    on={size === 'XS' ? true : false}
                    onClick={() => {
                      setSize('XS');
                    }}
                  >
                    XS
                  </Button>
                </div>
                <div>
                  <Button
                    on={size === 'SM' ? true : false}
                    onClick={() => {
                      setSize('SM');
                    }}
                    width='57px'
                  >
                    SM
                  </Button>
                </div>
                <div>
                  <Button
                    on={size === 'MD' ? true : false}
                    onClick={() => {
                      setSize('MD');
                    }}
                    width='57px'
                  >
                    MD
                  </Button>
                </div>
                <div>
                  <Button
                    on={size === 'LG' ? true : false}
                    onClick={() => {
                      setSize('LG');
                    }}
                    width='57px'
                  >
                    LG
                  </Button>
                </div>
                <div>
                  <Button
                    on={size === 'XL' ? true : false}
                    onClick={() => {
                      setSize('XL');
                    }}
                    width='57px'
                  >
                    XL
                  </Button>
                </div>
                <div>
                  <Button
                    on={size === 'XXL' ? true : false}
                    onClick={() => {
                      setSize('XXL');
                    }}
                    width='57px'
                  >
                    XXL
                  </Button>
                </div>
                <div>
                  <Button
                    on={size === '3XL' ? true : false}
                    onClick={() => {
                      setSize('3XL');
                    }}
                    width='57px'
                  >
                    3XL
                  </Button>
                </div>
                <div>
                  <Button
                    on={size === '4Xl' ? true : false}
                    onClick={() => {
                      setSize('4XL');
                    }}
                    width='57px'
                  >
                    4XL
                  </Button>
                </div>
                <div>
                  <Button
                    on={size === '5XL' ? true : false}
                    onClick={() => {
                      setSize('5XL');
                    }}
                    width='57px'
                  >
                    5Xl
                  </Button>
                </div>
                <div>
                  <Button
                    on={size === '6XL' ? true : false}
                    onClick={() => {
                      setSize('6XL');
                    }}
                    width='57px'
                  >
                    6Xl
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className='flex lg:mt-[39px] mt-[100px] gap-10 lg:gap-2'>
                  <ItemH4>
                    <Cloth className='h-[80px] w-[80px] lg:h-[28px] lg:w-[28px]' />{' '}
                    Cloth:
                  </ItemH4>
                  <ItemDesc> Metallic Synthetic Fur Fibre </ItemDesc>
                </div>
                <div className='flex mt-[39px] gap-10 lg:gap-2'>
                  <ItemH4>
                    <ColorSwatchIcon className='h-[80px] w-[80px] lg:h-[28px] lg:w-[28px]' />
                    Color:
                  </ItemH4>
                  <ItemDesc> Blue </ItemDesc>
                </div>
              </div>
              <div className='flex gap-10 mb-[400px] mt-10 lg:mb-10 lg:mt-3'>
                <Button
                  on={true}
                  width='210px'
                  font='Montserrat'
                  fontWeight={600}
                  mobileWidth={500}
                  mobileHeight={180}
                  mobileFontWeight={800}
                >
                  Buy Now
                </Button>
                <Button
                  width={300}
                  font='Montserrat'
                  fontWeight={600}
                  mobileWidth={550}
                  mobileHeight={180}
                  mobileFontWeight={800}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </ThirdDiv>
        <BiggerImageDiv>
          <ImagesDiv>
            <Imaage
              onMouseEnter={() => setHov(true)}
              onMouseLeave={() => setHov(false)}
              onMouseMove={(e) => {
                const { y } = getRelativePos(
                  e.clientX,
                  e.clientY,
                  e.currentTarget
                );
                setEY(y);
              }}
              layout='fill'
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

export default ViewCard;
