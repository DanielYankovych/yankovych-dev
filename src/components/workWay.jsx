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
          duration: 4,
          stagger: 2,
          scrollTrigger: {
            trigger: wordsSectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 3,
          },
        },
      );

      gsap.to(wordsRef.current, {
        color: (i) => "#b72929",
        ease: "none",
        stagger: 2,
        scrollTrigger: {
          trigger: wordsSectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress; // 0…1
            const activeIndex = Math.floor(progress * wordsRef.current.length);

            wordsRef.current.forEach((row, i) => {
              row.style.color = i === activeIndex ? "#b72929" : "#000000";
            });
          },
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div
        ref={textRef}
        className="indent-20 md:mr-[11vw] text-black text-xl md:text-[3vw] leading-tight"
      >
        What stays consistent <br />
        is the way I work:
      </div>

      <div
        ref={wordsSectionRef}
        className="text-black text-3xl md:text-[6vw] leading-tight pt-32 -ml-[0.05em] md:ml-[24.5vw]"
      >
        {WORK_WAY.map((word, idx) => (
          <div
            key={idx}
            ref={(el) => (wordsRef.current[idx] = el)}
            className="transition-colors duration-300"
          >
            {word}
          </div>
        ))}
      </div>

      <div className="w-full pt-32 pb-12 flex justify-end items-center">
        <div>
          <div className="text-red-500 text-xl md:text-[3vw] mb-4">
            Check my
          </div>
          <Button
            href={GITHUB_LINK}
            classNames="!text-gray-500 text-3xl md:text-[6vw] px-10 leading-none"
          >
            Github
          </Button>
        </div>
      </div>
    </div>
  );
};
