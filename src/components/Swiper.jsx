"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

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
          <img className='w-[100%] max-h-96' src="https://i.ibb.co/17ZRR8S/6.jpg" alt="/" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
