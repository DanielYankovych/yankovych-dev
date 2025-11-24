"use client";

import React, { useLayoutEffect, useRef } from "react";
import { GITHUB_LINK, WORK_WAY } from "@/data";
import gsap from "gsap";
import { Button } from "@/components/button";

export const WorkWay = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const wordsSectionRef = useRef(null);
  const wordsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 80 },
        {
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.to(textRef.current, {
        yPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        wordsRef.current,
        { x: (i) => (i % 2 === 0 ? 150 : -150) },
        {
          x: 0,
          ease: "none",
          duration: 3,
          stagger: 1,
          scrollTrigger: {
            trigger: wordsSectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 2,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div
        ref={textRef}
        className="indent-10 md:indent-20 md:mr-[11vw] text-black text-4xl md:text-[52px] leading-tight"
      >
        What stays consistent <br />
        is the way I work:
      </div>

      <div
        ref={wordsSectionRef}
        className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl leading-tight pt-6 md:pt-32 md:ml-[24.5vw]"
      >
        {WORK_WAY.map((word, idx) => (
          <div
            key={idx}
            ref={(el) => (wordsRef.current[idx] = el)}
            className="transition-all ease-in-out duration-200 hover:text-red-500"
          >
            {word}
          </div>
        ))}
      </div>

      <div className="w-full pt-12 md:pt-32 pb-12 flex justify-end items-center">
        <div>
          <div className="text-red-500 text-4xl md:text-[52px] mb-4">
            Check my
          </div>
          <Button
            href={GITHUB_LINK}
            classNames="!text-gray-500 border-gray-500 !text-5xl md:!text-6xl lg:!text-7xl 2xl:!text-8xl px-10 leading-none"
          >
            Github
          </Button>
        </div>
      </div>
    </div>
  );
};
