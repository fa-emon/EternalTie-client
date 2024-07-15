import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css"

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="brightness-75 kenburns-top-right"
            style={{ height: "80vh", objectFit: "cover", width: "100%" }}
            src="https://i.ibb.co/L5tSkFJ/pexels-photo-5729127.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="brightness-75 kenburns-top-right"
            style={{ height: "80vh", objectFit: "cover", width: "100%" }}
            src="https://i.ibb.co/RT6h3WX/pexels-photo-5729028.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <p className="text-white text-4xl font-bold">Find your eternalTie</p>
      </div>
    </div>
  );
};

export default Banner;
