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
            end: "bottom 80%",
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
            end: "bottom 80%",
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
            end: "bottom 80%",
            scrub: 1.5,
          },
          duration: 5,
          stagger: 2,
        },
      );

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(toolsRef.current, {
          xPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: toolsListRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 0.5,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div
        ref={paragraphRef}
        className="w-full md:w-3/4 text-red-500 text-4xl md:text-5xl leading-tight"
      >
        <div className="w-full pr-0 md:pr-3">
          Every project has its own character, so I adapt my process to what it
          needs — sometimes structured and straightforward, sometimes more
          exploratory and creative.
        </div>
      </div>

      <div
        ref={techStackRef}
        className="text-dark text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl md:-ml-1 leading-none py-12 md:pt-28 text-center"
      >
        My tech stack
      </div>

      <div className="flex justify-start items-center text-lg md:text-xl font-fixel-medium">
        <div className="text-gray-500 border-2 border-gray-500 px-6 py-1 rounded-full">
          Frameworks
        </div>
      </div>

      <div
        ref={frameworksListRef}
        className="w-full overflow-hidden pt-10 md:pt-12"
      >
        <TechStackSwiper data={FRAMEWORKS} ref={frameworksRef} />
      </div>

      <div className="flex justify-start items-center text-lg md:text-xl font-fixel-medium pt-4 md:pt-8">
        <div className="text-gray-500 border-2 border-gray-500 px-6 py-1 rounded-full">
          Programming languages
        </div>
      </div>
      <div
        ref={languagesListRef}
        className="w-full overflow-hidden pt-10 md:pt-12"
      >
        <TechStackSwiper data={PROGRAMMING_LANGUAGES} ref={languagesRef} />
      </div>

      <div className="flex justify-start items-center text-lg md:text-xl font-fixel-medium pt-4 md:pt-8">
        <div className="text-gray-500 border-2 border-gray-500 px-6 py-1 rounded-full">
          Tools
        </div>
      </div>
      <div ref={toolsListRef} className="w-full overflow-hidden pt-10 md:pt-12">
        <TechStackSwiper
          data={TOOLS}
          slidesPerView={7}
          initialSlide={3}
          autoplay
          ref={toolsRef}
        />
      </div>
    </div>
  );
};
