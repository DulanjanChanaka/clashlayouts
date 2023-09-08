"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';

export default function SwiperComponent() {
    
  return (
    <>
    
      <div className="w-[100%] mt-12">
      <Swiper
        effect={'fade'}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className=" w-[100%]  "
      >
        <SwiperSlide >
          <img className='w-[100%] mt-4  max-h-100' src="https://i.ibb.co/vjmYsrP/Whats-App-Image-2023-09-08-at-21-20-36.jpg" alt="/" />
          
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
