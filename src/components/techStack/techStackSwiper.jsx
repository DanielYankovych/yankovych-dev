"use client";

import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectCoverflow, FreeMode } from "swiper/modules";
import { FRAMEWORKS } from "@/data";
import { TechStackBox } from "@/components/techStack/techStackBox";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";

export const TechStackSwiper = forwardRef((props, ref) => {
  return (
    <Swiper
      modules={[A11y, Autoplay, EffectCoverflow, FreeMode]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={25}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      initialSlide={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      freeMode={true}
      speed={1500}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-1/2 2xl:w-2/5 mx-auto"
    >
      {FRAMEWORKS.map((framework, idx) => (
        <SwiperSlide key={idx} className="!flex justify-center items-center">
          <div ref={(el) => (ref.current[idx] = el)} className="w-full">
            <TechStackBox
              name={framework.name}
              logo={framework.logo}
              classNames={idx === 2 && "!p-3"}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
});
