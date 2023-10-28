"use client"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from 'react';
import { Navigation , Autoplay  } from "swiper/modules";
import {  onSnapshot, collection,  } from 'firebase/firestore';
import { db } from "@/firebase/firebase";


const Newcontent = ({ title= [] }) => {

  const [data, setData] = useState ([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'topphoto'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);


      

      const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    // Update the slidesPerView based on window width on the client-side
    function handleResize() {
      setSlidesPerView(window.innerWidth < 600 ? 1 : 3);
    }

    window.addEventListener('resize', handleResize);

    // Call the handleResize function initially to set the initial slidesPerView
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);}


  }, []);

  return (
    <div className="w-full h-50vh m-0 p-0">
      <h2>{title}</h2>
      {/* Render the Swiper directly without checking typeof window */}
      <Swiper className="w-full p-0" slidesPerView={slidesPerView} spaceBetween={10} navigation autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }} modules={[Navigation, Autoplay]}>
        {data?.map(({ imageUrl, baseurl }, index) => (
          <SwiperSlide className="w-auto h-auto" key={index}>
            <a href={baseurl}><img src={imageUrl}/></a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Newcontent;

