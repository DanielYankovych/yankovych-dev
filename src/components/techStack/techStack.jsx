"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FRAMEWORKS, PROGRAMMING_LANGUAGES, TOOLS } from "@/data";
import { TechStackSwiper } from "@/components/techStack/techStackSwiper";

export const TechStack = () => {
  const sectionRef = useRef(null);
  const paragraphRef = useRef(null);
  const techStackRef = useRef(null);

  const frameworksListRef = useRef(null);
  const frameworksRef = useRef([]);

  const languagesListRef = useRef(null);
  const languagesRef = useRef([]);

  const toolsListRef = useRef(null);
  const toolsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        paragraphRef.current,
        { y: 50 },
        {
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.to(paragraphRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        techStackRef.current,
        { y: 50 },
        {
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: techStackRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.to(techStackRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.fromTo(
        frameworksRef.current,
        { y: 100 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: frameworksListRef.current,
            start: "top 90%",
            end: "bottom 90%",
            scrub: 1.5,
          },
          duration: 5,
          stagger: 2,
        },
      );

      gsap.fromTo(
        languagesRef.current,
        { y: 100 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: languagesListRef.current,
            start: "top 90%",
            end: "bottom 90%",
            scrub: 1.5,
          },
          duration: 5,
          stagger: 2,
        },
      );

      gsap.fromTo(
        toolsRef.current,
        { y: 100 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: toolsListRef.current,
            start: "top 90%",
            end: "bottom 90%",
            scrub: 1.5,
          },
          duration: 5,
          stagger: 2,
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full font-fixel-medium text-dark">
      <div
        ref={paragraphRef}
        className="w-full md:w-2/3 text-red-500 text-3xl md:text-5xl leading-tight font-fixel-extra-bold"
      >
        <div className="w-full">
          Every project is unique. <br />
          So I adapt my frontend process accordingly- whether it needs
          predictable, efficient engineering, or rapid iteration,
          experimentation, and creative technical solution.
        </div>
      </div>

      <div
        ref={techStackRef}
        className="text-dark text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl md:-ml-1 leading-none py-12 md:pt-28 text-center font-fixel-extra-bold"
      >
        My tech stack
      </div>

      <div className="text-lg md:text-xl opacity-20">Frameworks</div>

      <div ref={frameworksListRef} className="pt-10 md:pt-12 pb-20 md:pb-40">
        <TechStackSwiper data={FRAMEWORKS} ref={frameworksRef} />
      </div>

      <div className="text-lg md:text-xl opacity-20">Programming languages</div>
      <div ref={languagesListRef} className="pt-10 md:pt-12 pb-20 md:pb-40">
        <TechStackSwiper data={PROGRAMMING_LANGUAGES} ref={languagesRef} />
      </div>

      <div className="text-lg md:text-xl opacity-20">Tools</div>
      <div ref={toolsListRef} className="pt-10 md:pt-12 pb-20 md:pb-40">
        <TechStackSwiper data={TOOLS} ref={toolsRef} />
      </div>
    </div>
  );
};
