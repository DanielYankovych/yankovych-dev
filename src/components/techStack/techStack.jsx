"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PROGRAMMING_LANGUAGES, TOOLS } from "@/data";
import { TechStackBox } from "@/components/techStack/techStackBox";
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
        { y: 80 },
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
        yPercent: -80,
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
        { y: 60 },
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
        yPercent: -60,
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
        { y: 150 },
        {
          y: 0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: frameworksListRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 3,
          },
          duration: 6,
          stagger: 3,
        },
      );

      gsap.fromTo(
        languagesRef.current,
        { y: 150 },
        {
          y: 0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: languagesListRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 4,
          },
          duration: 6,
          stagger: 3,
        },
      );

      gsap.fromTo(
        toolsRef.current,
        { y: 150 },
        {
          y: 0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: toolsListRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 5,
          },
          duration: 6,
          stagger: 3,
        },
      );
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
        className="text-dark text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl md:-ml-1 leading-none pb-16 md:py-16 text-center"
      >
        My tech stack
      </div>

      <div className="flex justify-start items-center text-lg md:text-xl font-fixel-medium">
        <div className="text-gray-500 border-2 border-gray-500 px-6 py-1 rounded-full">
          Frameworks
        </div>
      </div>

      <div ref={frameworksListRef} className="w-full overflow-hidden">
        {/*<div className="w-auto flex justify-start md:justify-center items-start gap-6 md:gap-20 overflow-x-auto no-scrollbar py-8 md:py-12">*/}
        {/*  {FRAMEWORKS.map((framework, idx) => (*/}
        {/*    <div key={idx} ref={(el) => (frameworksRef.current[idx] = el)}>*/}
        {/*      <TechStackBox*/}
        {/*        name={framework.name}*/}
        {/*        logo={framework.logo}*/}
        {/*        classNames={idx === 2 && "!p-3"}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  ))}*/}
        {/*</div>*/}
        <TechStackSwiper ref={frameworksRef} />
      </div>

      <div className="flex justify-start items-center text-lg md:text-xl font-fixel-medium pt-8 md:pt-16">
        <div className="text-gray-500 border-2 border-gray-500 px-6 py-1 rounded-full">
          Programming languages
        </div>
      </div>
      <div ref={languagesListRef} className="w-full overflow-hidden">
        <div className="w-auto flex justify-start md:justify-center items-start gap-6 md:gap-20 overflow-x-auto overflow-y-hidden no-scrollbar py-8 md:py-12">
          {PROGRAMMING_LANGUAGES.map((language, idx) => (
            <div key={idx} ref={(el) => (languagesRef.current[idx] = el)}>
              <TechStackBox name={language.name} logo={language.logo} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-start items-center text-lg md:text-xl font-fixel-medium pt-8 md:pt-16">
        <div className="text-gray-500 border-2 border-gray-500 px-6 py-1 rounded-full">
          Tools
        </div>
      </div>
      <div ref={toolsListRef} className="w-full overflow-hidden">
        <div className="w-auto flex justify-start items-start gap-6 md:gap-20 overflow-x-auto overflow-y-hidden no-scrollbar py-8 md:py-12">
          {TOOLS.map((tool, idx) => (
            <div key={idx} ref={(el) => (toolsRef.current[idx] = el)}>
              <TechStackBox name={tool.name} logo={tool.logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
