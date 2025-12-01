"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FRAMEWORKS, PROGRAMMING_LANGUAGES, TOOLS } from "@/data";
import { TechStackSwiper } from "@/components/techStack/techStackSwiper";
import { TechStackBoxNew } from "@/components/techStack/techStackBoxNew";
import classnames from "classnames";

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

      // gsap.fromTo(
      //   frameworksRef.current,
      //   { y: 100 },
      //   {
      //     y: 0,
      //     ease: "none",
      //     scrollTrigger: {
      //       trigger: frameworksListRef.current,
      //       start: "top 90%",
      //       end: "bottom 80%",
      //       scrub: 1.5,
      //     },
      //     duration: 5,
      //     stagger: 2,
      //   },
      // );

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
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div
        ref={paragraphRef}
        className="w-full md:w-2/3 text-red-500 text-4xl md:text-5xl leading-tight"
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
        className="text-dark text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl md:-ml-1 leading-none py-12 md:pt-28 text-center"
      >
        My tech stack
      </div>

      <div className="flex justify-start items-center text-lg md:text-xl font-fixel-medium">
        <div className="text-gray-500 border-2 border-gray-500 px-6 py-1 rounded-full">
          Frameworks
        </div>
      </div>

      {/*<div*/}
      {/*  ref={frameworksListRef}*/}
      {/*  className="w-full overflow-hidden pt-10 md:pt-12"*/}
      {/*>*/}
      {/*  <TechStackSwiper data={FRAMEWORKS} ref={frameworksRef} />*/}
      {/*</div>*/}
      <div
        ref={frameworksListRef}
        className="w-full pt-10 md:pt-12 relative min-h-96 flex justify-center items-center"
      >
        <div className="relative h-96">
          {FRAMEWORKS.map((item, idx) => (
            <div
              key={item.name}
              ref={(el) => (frameworksRef.current[idx] = el)}
              className={classnames(
                "absolute transition-transform duration-300",
                idx === FRAMEWORKS.length - 1 ? "" : "hover:-translate-x-16",
              )}
              style={{
                left: `${idx * 100 - (FRAMEWORKS.length * 100) / 2}px`,
                top: `${idx * 20 - (FRAMEWORKS.length * 20) / 2}px`,
                zIndex: FRAMEWORKS.length + idx,
              }}
            >
              <TechStackBoxNew {...item} />
            </div>
          ))}
        </div>
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
          ref={toolsRef}
          classNames="!justify-start"
        />
      </div>
    </div>
  );
};
