import React from 'react';
import Button from '@components/button/Button';
import { styled } from '@stitches/react';
import Link from 'next/link';
import Card from '@components/cart/Card'
import CartMap from '../../ileterations/cart/Cart';
const ShoppingH4 = styled('h4', {
  fontSize: 15,
  fontFamily: 'Poppins',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: 0.4,
  '@media only screen and (max-width:600px)': {
    fontSize: 15,
    marginBottom: 30,
  },
});
const TotalH4 = styled('h4', {
  fontFamily: 'Poppins',
  fontWeight: 600,
  textTransform: 'capitalize',
  fontSize: 13,
});
const TotalMoney = styled('h4', {
  fontFamily: 'Poppins',
  fontWeight: 600,
});
const Cart = () => {
  return (
    <>
      <div className='hidden md:block mt-4 h-full w-full'>
        <div className='w-full flex justify-between md:pl-12 md:pr-[15%] lg:pl-[10%] lg:pr-[17%]'>
          <ShoppingH4>Your Shopping Cart</ShoppingH4>
          <ShoppingH4>cart summary</ShoppingH4>
        </div>
      </div>
      <div className='w-full pb-[6rem] h-full mt-4 flex justify-between lg:pr-24 lg:pl-32 md:pl-12 md:pr-6'>
        <div className='grid grid-col space-y-10 w-full '>
          {
            //Cards
          }
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className='border border-midnight w-[30%] h-[20%] hidden md:block'>
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
      <div className='flex bottom-[3.5rem] md:hidden fixed w-full items-center justify-evenly h-24 bg-white/80 shadow-lg backdrop-filter backdrop-blur-lg'>
        <h4 className='font-[600] font-[Poppins] text-[30px]'>₹126,500</h4>
        <Button on={true} mobileFontWeight={800} mobileFontSize={20} height={55} width={180}>
          Proceed
        </Button>
      </div>
    </>
  );
};

export default Cart;
