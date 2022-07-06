import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Pagination, Keyboard, Mousewheel, EffectCoverflow } from 'swiper';
const swiper = () => {
  return (
    <div className="relative w-screen h-[70vh]">
      <Swiper
      modules={[Pagination, Keyboard, Mousewheel, EffectCoverflow ]}
      effect="coverflow"
      pagination={{clickable: true}}
      keyboard
      mousewheel
      >
        <SwiperSlide>
          <Image
          layout='fill'
            objectFit='cover'
            src={
              'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            }
            alt='Preview'
            className='cursor-grab'
          />
        </SwiperSlide><SwiperSlide>
          <Image
          layout='fill'

            objectFit='cover'
            src={
              'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            }
            alt='Preview'
            className='cursor-grab'
          />
        </SwiperSlide><SwiperSlide>
          <Image
          layout='fill'
            height={281}
            objectFit='cover'
            src={
              'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            }
            alt='Preview'
            className='cursor-grab'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default swiper;
