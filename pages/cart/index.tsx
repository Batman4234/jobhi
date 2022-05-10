import React from 'react';
import Button from '@components/button/Button';
import { styled } from '@stitches/react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon, XIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartFilledIcon } from '@heroicons/react/solid';
const ShoppingH4 = styled('h4', {
  fontSize: 15,
  fontFamily: 'Poppins',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: 0.4,
  '@media only screen and (max-width:600px)': {
    fontSize: 40,
    marginBottom: 30,
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
  marginTop: '5px',
  color: '#5A5555',
  '&:hover': {
    color: '#171717',
  },
  '@media only screen and (max-width: 900px)': {
    fontSize: 80,
  },
});
const DiscountH5 = styled('h5', {
  fontFamily: 'Poppins',
  transition: 'all 200ms cubic-bezier(.73,.08,.53,.81)',
  marginTop: '50px',
  fontWeight: 800,
  fontSize: 11,
  color: '#5A5555',
  '&:hover': {
    color: '#171717',
  },
  '@media only screen and (max-width: 900px)': {
    // fontSize: 80,
  },
  textTransform: 'uppercase',
});
const PriceH2 = styled('h2', {
  marginLeft: 15,
  fontFamily: 'Poppins',
  '@media only screen and (max-width: 600px)': {
    fontSize: 70,
  },
});
const CloseButton = styled('button', {});
const LikeButton = styled('button', {});
const TotalH4 = styled('h4', {
  fontFamily: 'Poppins',
  fontWeight: 600,
  textTransform: 'capitalize',
  fontSize: 13,
});
const TotalMoney = styled('h4', {
  marginLeft: 100,
  fontFamily: 'Poppins',
  fontWeight: 600,
});
const Cart = () => {
  return (
    <>
      <div className='mt-64 hidden md:block md:mt-32'>
        <div>
          <div className='w-full flex justify-between'>
            <div className='ml-32'>
              <ShoppingH4>Your Shopping Cart</ShoppingH4>
            </div>
            <div className='mr-[20rem]'>
              <ShoppingH4>cart summary</ShoppingH4>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-col'>
            <div className='flex w-full'>
              <div className='ml-32 mt-4 w-[50vw] flex'>
                <div className='w-[100vw] items-center h-40 border border-midnight'>
                  <div className='flex p-[0.6rem] pt-[0.45rem]'>
                    <Link href='/items/mens/rock'>
                      <a>
                        <Image
                          width={100}
                          height={170}
                          objectFit='cover'
                          src={
                            'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_1.jpg?impolicy=detailimageprod'
                          }
                          alt=''
                        />
                      </a>
                    </Link>
                    <div className='flex justify-between w-full ml-5'>
                      <div className=''>
                        <Link href='/items/mens/rock'>
                          <a>
                            <AuthorH4>Peeki Kaka</AuthorH4>
                          </a>
                        </Link>
                        <ItemP>Jojo Apten</ItemP>
                        <DiscountH5>Discount: 20%</DiscountH5>
                      </div>
                      <div className='mt-2 mr-2'>
                        <PriceH2>120$</PriceH2>
                        <div className='mt-[4.5rem] flex gap-2'>
                          <LikeButton>
                            <HeartIcon height={24} width={24} strokeWidth={1} />
                          </LikeButton>
                          <CloseButton>
                            <XIcon height={24} width={24} strokeWidth={1} />
                          </CloseButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='border border-midnight w-[30vw] h-40 mt-4 ml-[7.3rem] mr-[7.4rem]'>
            <div className=''>
              <div className='mr-6 flex p-5 justify-between pb-1'>
                <TotalH4>Total Price </TotalH4>
                <TotalMoney>₹126,500</TotalMoney>
              </div>
              <div className='mr-6 flex p-5 justify-between pb-1'>
                <TotalH4 css={{ width: 100 }}>Total Discount </TotalH4>
                <TotalMoney>₹126,500</TotalMoney>
              </div>
              <div className='mr-6 flex p-5 justify-between'>
                <TotalH4>Shipping </TotalH4>
                <TotalMoney>₹126,500</TotalMoney>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-64 block md:hidden'>
        <div>
          <div>
            <div className='pb-96'>
              <div className='border border-midnight mx-8 mt-32 h-[27rem]'>
                <div className='flex'>
                  <div className='ml-6 mt-6 h-[380px] bg-sky w-[200px]'>
                    <Link href={`/items/mens/rock`}>
                      <a>
                        <Image
                          layout='responsive'
                          height={380}
                          width={200}
                          src={
                            'https://img.perniaspopupshop.com/catalog/product/d/m/DMMC042202_1.jpg?impolicy=detailimageprod'
                          }
                          objectFit='cover'
                          alt=''
                        />
                      </a>
                    </Link>
                  </div>
                  <div className='ml-20 mt-5 flex items-end'>
                    <div>
                      <AuthorH4>Jimmy Kaka</AuthorH4>
                      <ItemP>Jojo Apten</ItemP>
                      <PriceH2>₹10,000</PriceH2>
                    </div>
                    <div className='ml-24 space-x-7'>
                      <button>
                        <HeartIcon height={80} width={80} strokeWidth={1} />
                      </button>
                      <button>
                        <XIcon height={80} width={80} strokeWidth={1} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='fixed h-64 w-full flex bg-white shadow-lg bottom-0 mb-56'>
          <div className='flex items-center'>
            <div className='items-center flex ml-32'>
              <PriceH2 css={{ fontWeight: 700 }}>₹10,000</PriceH2>
            </div>
            <div className='ml-80 mb-10'>
              <Button
                on={true}
                width='210px'
                font='Montserrat'
                fontWeight={600}
                mobileWidth={500}
                mobileHeight={180}
                mobileFontWeight={800}
              >
                proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
