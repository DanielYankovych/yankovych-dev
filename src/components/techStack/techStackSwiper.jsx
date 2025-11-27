"use client";

import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import { TechStackBox } from "@/components/techStack/techStackBox";
import classnames from "classnames";

import "swiper/css";
import "swiper/css/autoplay";

export const TechStackSwiper = forwardRef(
  ({ data, slidesPerView = 3, initialSlide = 1, autoplay = false }, ref) => {
    return (
      <Swiper
        modules={[A11y, Autoplay]}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        initialSlide={initialSlide}
        speed={1500}
        autoplay={autoplay}
        breakpoints={{
          0: { slidesPerView: 2 },
          1024: { slidesPerView: slidesPerView, spaceBetween: 50 },
        }}
        className={classnames(
          "w-full md:w-1/2 2xl:w-2/5 mx-auto",
          slidesPerView !== 3 && "!w-full",
        )}
      >
        {data.map((framework, idx) => (
          <SwiperSlide key={idx} className="!flex justify-center items-center">
            <div ref={(el) => (ref.current[idx] = el)}>
              <TechStackBox name={framework.name} logo={framework.logo} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  },
);
