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
        { y: 50 },
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
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      const words = gsap.utils.toArray(wordsRef.current);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: wordsSectionRef.current,
            start: "top 95%",
            end: "bottom 85%",
            scrub: 1,
          },
        })
        .fromTo(
          words,
          { x: (i) => gsap.utils.wrap([150, -150])(i) },
          { x: 0, ease: "none", stagger: 0.2 },
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div
        ref={textRef}
        className="w-full md:w-1/2 mx-auto text-center text-dark text-4xl md:text-5xl leading-tight"
      >
        What stays consistent is the way I work:
      </div>

      <div
        ref={wordsSectionRef}
        className="text-dark text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl leading-tight pt-16 text-center"
      >
        {WORK_WAY.map((word, idx) => (
          <div
            key={idx}
            ref={(el) => (wordsRef.current[idx] = el)}
            className="transition-colors ease-in-out duration-200 hover:text-red-500"
          >
            {word}
          </div>
        ))}
      </div>

      <div className="w-full pt-28 md:pt-32 pb-12 flex justify-end items-center">
        <div>
          <div className="text-dark text-4xl md:text-5xl mb-4 md:mb-8">
            Check my
          </div>
          <Button
            href={GITHUB_LINK}
            classNames="!text-light bg-red-500 !text-5xl md:!text-6xl lg:!text-7xl 2xl:!text-8xl px-10 !font-fixel-bold holo-button-red"
          >
            Github
          </Button>
        </div>
      </div>
    </div>
  );
};
