import React from 'react';
import Button from '@components/button/Button';
import { styled } from '@stitches/react';
import Card from '@components/cart/Card';
import CardSkeleton from '@components/cart/CardSkeleton';
import useSWR, {mutate} from 'swr';
import styles from '@styles/cart.module.css';
import { useAuth } from '@lib/Auth';
import fetcher from 'utils/fetcher';
import { deleteCart } from '@lib/database';
import TextCenter from '@components/textMiddle';
import Head from 'next/head';
interface CartData {
  id: string;
  author?: string;
  name?: string;
  pageUrl?: string;
  price?: string;
  url?: string;
  createdAt: any;
}
const ShoppingH4 = styled('h4', {
  fontSize: 15,
  fontFamily: 'Poppins',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: 0.4,
  height: 18,
  '@media only screen and (max-width:600px)': {
    marginBottom: 30,
  },
});
const TotalH4 = styled('h4', {
  fontFamily: 'Poppins',
  fontWeight: 600,
  textTransform: 'capitalize',
  fontSize: 13,
  height: 18,
});
const TotalMoney = styled('h4', {
  fontFamily: 'Poppins',
  fontWeight: 600,
  height: 18,
  width: 70,
});
const Cart = () => {
  const {user} = useAuth();
  const { data } = useSWR(user ? [`/api/cart/getCart/`, user.token] : null, fetcher);
  if (!data) {
    return (
      <>
        <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && !document.cookie.includes('signed')) {
            window.location.href = "/login"
          }
        `,
          }}
        />
      </Head>
        <div className='hidden md:block mt-4 h-full w-full'>
          <div className='w-full flex justify-between md:pl-12 md:pr-[15%] lg:pl-[10%] lg:pr-[17%] animate-pulse'>
            <h4
              className={
                'bg-gray-300 w-[169px] text-[15px] font-[Poppins] uppercase font-[600] tracking-[0.4px] h-[18px] mb-[20px] md:mb-0 '
              }
            ></h4>
            <h4
              className={
                'bg-gray-300 w-[121px] text-[15px] font-[Poppins] uppercase font-[600] tracking-[0.4px] h-[18px] mb-[20px] md:mb-0 '
              }
            ></h4>
          </div>
        </div>
        <div className='w-full pb-[10rem] h-full mt-4 flex justify-between lg:pr-24 lg:pl-32 md:pl-12 md:pr-6'>
          <div className='grid grid-col space-y-5 w-full '>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
          <div className='border border-midnight w-[30%] h-[9rem] hidden md:block space-y-7 py-3 animate-pulse'>
            <div className='mr-6 flex px-5 pt-[0.15rem] justify-between items-center '>
              <h4 className='bg-gray-300 h-[18px] w-[68px]'></h4>
              <h4 className='bg-gray-300 h-[18px] w-[70px]'></h4>
            </div>
            <div className='mr-6 flex px-5 justify-between'>
              <h4 className='bg-gray-300 h-[18px] w-[93px]'></h4>
              <h4 className='bg-gray-300 h-[18px] w-[70px]'></h4>
            </div>
            <div className='mr-6 flex px-5 justify-between'>
              <h4 className='bg-gray-300 h-[18px] w-[57px]'></h4>
              <h4 className='bg-gray-300 h-[18px] w-[70px]'></h4>
            </div>
          </div>
        </div>
        <div className='flex bottom-[3.5rem] md:hidden fixed w-full items-center justify-evenly h-24 bg-white/80 shadow-lg backdrop-filter backdrop-blur-lg'>
          <h4
            className={`font-[600] font-[Poppins] text-[30px] ${styles.skeleton}`}
          ></h4>
          <Button
            on={true}
            mobileFontWeight={800}
            mobileFontSize={20}
            height={55}
            width={180}
            className='bg-gray-300'
          ></Button>
        </div>
      </>
    );
  }
  else if (!data.length) {
    return (
      <TextCenter title='Your cart is empty!'/>
    )
  }
  return (
    <>
         <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && !document.cookie.includes('signed')) {
            window.location.href = "/login"
          }
        `,
          }}
        />
      </Head>
      <div className='hidden md:block mt-4 h-full w-full'>
        <div className='w-full flex justify-between md:pl-12 md:pr-[15%] lg:pl-[10%] lg:pr-[17%]'>
          <ShoppingH4>Your Shopping Cart</ShoppingH4>
          <ShoppingH4>cart summary</ShoppingH4>
        </div>
      </div>
      <div className='w-full h-full mt-4 flex justify-between lg:pr-24 lg:pl-32 md:pl-12 md:pr-6'>
        <div className='grid grid-col space-y-5 w-full '>
          {
            //Cards
            data.map((element: CartData) => {
              return (
                <Card
                  key={element.id}
                  name={element.name as string}
                  author={element.author as string}
                  price={element.price as string}
                  url={element.url as string}
                  onCloseClick={() => {
                    deleteCart(element.id).then(async () => {
                      return await mutate(['/api/cart/getCart/', user.token], async (data:any) => {
                        setTimeout(() => [...data], 500)
                      }
                      )
                    });
                  }}
                />
              );
            })
          }
        </div>
        <div className='border border-midnight w-[30%] h-[9rem] hidden md:block space-y-7 py-3'>
          <div className='mr-6 flex px-5 justify-between'>
            <TotalH4>Total Price </TotalH4>
            <TotalMoney>₹126,500</TotalMoney>
          </div>
          <div className='mr-6 flex px-5 justify-between'>
            <TotalH4>Total Discount </TotalH4>
            <TotalMoney>₹126,500</TotalMoney>
          </div>
          <div className='mr-6 flex px-5 justify-between'>
            <TotalH4>Shipping </TotalH4>
            <TotalMoney>₹126,500</TotalMoney>
          </div>
        </div>
      </div>
      <div className='flex bottom-[3.5rem] md:hidden fixed w-full items-center justify-evenly h-24 bg-white/80 shadow-lg backdrop-filter backdrop-blur-lg'>
        <h4 className='font-[600] font-[Poppins] text-[30px]'>₹126,500</h4>
        <Button
          on={true}
          mobileFontWeight={800}
          mobileFontSize={20}
          height={55}
          width={180}
        >
          Proceed
        </Button>
      </div>
    </>
  );
};
export default Cart;
