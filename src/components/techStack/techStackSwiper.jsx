"use client";

import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, FreeMode } from "swiper/modules";
import { TechStackBox } from "@/components/techStack/techStackBox";
import classnames from "classnames";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

export const TechStackSwiper = forwardRef(
  ({ data, slidesPerView = 3, initialSlide = 1, autoplay = false }, ref) => {
    return (
      <Swiper
        modules={[A11y, Autoplay, FreeMode]}
        grabCursor={true}
        spaceBetween={15}
        slidesPerView={slidesPerView}
        // initialSlide={initialSlide}
        speed={1500}
        autoplay={autoplay}
        freeMode={{
          enabled: true,
          momentum: true,
          sticky: false,
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 2, freeMode: false },
          1024: { slidesPerView: slidesPerView, spaceBetween: 50 },
        }}
        className={classnames(
          "w-full md:w-1/2 2xl:w-2/5 mx-auto h-64 !flex justify-center items-start",
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
