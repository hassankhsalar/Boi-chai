import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

const About = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Swiper
        style={{
          '--swiper-navigation-color': '#0e110d',
          '--swiper-pagination-color': '#0e110d',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="bg-background rounded-2xl p-10">
          
          <div className="subtitle" data-swiper-parallax="-200">
            How it works?
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            This website is designed to help you understand the process of
          borrowing books from our collection. It provides guidance on how to
          select, reserve, and return books effectively.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-accent text-white rounded-2xl p-10">
          
          <div className="subtitle" data-swiper-parallax="-200">
            24/7 Support
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            This application aims to be user-friendly. However, certain
            limitations may exist.for any issues contact support.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary rounded-2xl p-10">
          
          <div className="subtitle" data-swiper-parallax="-200">
          24/7 Support
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            This application aims to be user-friendly. However, certain
            limitations may exist.for any issues contact support.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;
