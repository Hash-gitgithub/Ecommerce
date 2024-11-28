import React from 'react'
import styled from 'styled-components';

import 'swiper/swiper-bundle.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function Services() {
  return (
    <Wrapper>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={2}
        // navigation
        autoplay={{ delay: 1000 }}
        style={{
          background: " rgb(131,58,180)",
          backgroundColor: "black",
          marginTop: "-120px",
          width: "100%",
          height: "177%",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          overflow: "hidden",
          listStyle: "none",
          padding: "0",
          zIndex: "1",
          display: "block"
        }}
      >
        <SwiperSlide className='slide'><img src="images/men.jpg" alt="" style={{
          width: "100%", height: "30rem",
          // padding: "10px",
        }} />
        </SwiperSlide>
        <SwiperSlide><img src="images/ring.jpg" alt="" style={{
          width: "100%", height: "30rem",
          // padding: "10px"
        }} />
        </SwiperSlide>
        <SwiperSlide><img src="images/newmen.jpg" alt="" style={{
          width: "100%", height: "30rem",
          // padding: "10px"
        }} />
        </SwiperSlide>
        <SwiperSlide><img src="images/thetv.jpg" alt="" style={{
          width: "100%", height: "30rem",
          // padding: "10px"
        }} />
        </SwiperSlide>
        <SwiperSlide><img src="images/banner.jpg" alt="" style={{
          width: "100%", height: "30rem",
          // padding: "10px"
        }} />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

const Wrapper
  = styled.section`
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: -5%;
    width: 199%;
    height: 44%;
    // position: absolute;
}
`;

export default Services
