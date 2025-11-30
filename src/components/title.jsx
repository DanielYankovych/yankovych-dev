"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import { TITLE } from "@/data";
import classnames from "classnames";
import { Button } from "@/components/main/button";

export const Title = forwardRef((props, ref) => {
  const containerRef = useRef();
  const titleRef = useRef([]);

  useImperativeHandle(ref, () => ({
    animate() {
      gsap.set(containerRef.current, { opacity: 1 });

      gsap.from(titleRef.current, {
        opacity: 0,
        x: (i) => (Math.floor(i / 2) % 2 === 0 ? 340 : -340),
        duration: 2,
        ease: "power3.out",
        stagger: 0.5,
      });
    },
  }));

  return (
    <div
      ref={containerRef}
      className="size-full flex flex-col justify-between opacity-0"
    >
      <div className="w-full flex justify-end items-center h-12">
        <Button href="#get-in-touch" classNames="max-w-44 w-full">
          Get in touch
        </Button>
      </div>
      <div className="w-full flex flex-col">
        {TITLE.map((title, idx) => (
          <div
            key={idx}
            ref={(el) => (titleRef.current[idx] = el)}
            className={classnames(
              "leading-none",
              idx === 0 &&
                "text-red-500 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl md:-ml-1 mb-4 md:mb-0",
              idx === 1 &&
                "text-light text-8xl md:text-9xl lg:text-[170px] 2xl:text-[200px] -ml-0.5 md:-ml-3 break-all",
              idx === 2 &&
                "text-light text-8xl md:text-9xl lg:text-[170px] 2xl:text-[200px] md:-mt-4 xl:-mt-8 text-right md:-mr-3 break-all",
              idx === 3 &&
                "text-red-500 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-right mt-4 md:mt-0",
            )}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="h-12" />
    </div>
  );
});
