"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Newcontent = ({ title = [] }) => {
  const [data, setData] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    // Update the slidesPerView based on window width on the client-side
    function handleResize() {
      setSlidesPerView(window.innerWidth < 600 ? 1 : 3);
    }

    window.addEventListener("resize", handleResize);

    // Call the handleResize function initially to set the initial slidesPerView
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch("https://benevolent-kitsune-f1c5de.netlify.app/api/top-photo")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full h-50vh m-0 p-0">
      <h2>{title}</h2>
      <Swiper
        className="w-full p-0 "
        slidesPerView={slidesPerView}
        spaceBetween={10}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
      >
        {data?.map(({ imageUrl, baseurl }, index) => (
          <SwiperSlide className="w-auto h-auto " key={index}>
            <a href={baseurl}>
              <img src={imageUrl} alt={`Slide ${index}`} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Newcontent;
