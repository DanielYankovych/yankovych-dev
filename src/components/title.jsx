"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import { TITLE } from "@/data";
import classnames from "classnames";
import { Button } from "@/components/button";

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
      <div className="w-full flex justify-end items-center h-10">
        <Button href="#get-in-touch" classNames="max-w-40 w-full">
          Get in touch
        </Button>
      </div>
      <div className="w-full flex flex-col">
        {TITLE.map((title, idx) => (
          <div
            key={idx}
            ref={(el) => (titleRef.current[idx] = el)}
            className={classnames(
              "leading-none text-nowrap",
              idx === 0 && "text-red-500 text-3xl md:text-[6vw] -ml-[0.05em]",
              idx === 1 && "text-white text-6xl md:text-[12vw] -ml-[0.06em]",
              idx === 2 &&
                "text-white md:ml-[22vw] text-5xl md:text-[12vw] ml-[0.01em] -mt-6",
              idx === 3 && "md:ml-[24.5vw] text-red-500 text-3xl md:text-[6vw]",
            )}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="h-10" />
    </div>
  );
});

Title.displayName = "Title";
