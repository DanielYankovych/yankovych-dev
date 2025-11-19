"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import classnames from "classnames";
import { FRAMEWORKS, PROGRAMMING_LANGUAGES, TOOLS } from "@/data";

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
        { y: 80 },
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
        yPercent: -80,
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

      gsap.to(sectionRef.current, {
        yPercent: -3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div
        ref={paragraphRef}
        className="indent-20 md:ml-[24.5vw] md:mr-[11vw] text-red-500 text-xl md:text-[3vw] leading-tight"
      >
        Every project has its own character, so I adapt my process to what it
        needs — sometimes structured and straightforward, sometimes more
        exploratory and creative.
      </div>

      <div
        ref={techStackRef}
        className="text-gray-500 text-3xl md:text-[6vw] leading-none -ml-[0.05em] my-32"
      >
        My tech stack
      </div>

      <div className="text-gray-400 text-lg md:text-[1vw] leading-none -ml-[0.05em] md:ml-[24.5vw] pb-12">
        Frameworks
      </div>
      <div
        ref={frameworksListRef}
        className="w-full flex justify-between md:justify-center items-start gap-6 md:gap-[6vw]"
      >
        {FRAMEWORKS.map((framework, idx) => (
          <div
            key={idx}
            ref={(el) => (frameworksRef.current[idx] = el)}
            className={classnames(
              "w-full md:w-[9vw] aspect-square bg-gray-500 flex justify-center items-center",
              idx === 2 ? "p-3" : "p-5",
            )}
          >
            <Image
              src={framework.logo}
              width={110}
              height={110}
              alt={framework.name}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      <div className="text-gray-400 text-lg md:text-[1vw] leading-none -ml-[0.05em] md:ml-[24.5vw] pt-32 pb-12">
        Programming languages
      </div>
      <div
        ref={languagesListRef}
        className="w-full flex justify-between md:justify-center items-start gap-6 md:gap-[6vw]"
      >
        {PROGRAMMING_LANGUAGES.map((language, idx) => (
          <div
            key={idx}
            ref={(el) => (languagesRef.current[idx] = el)}
            className="w-full md:w-[9vw] aspect-square bg-gray-500 flex justify-center items-center p-5"
          >
            <Image
              src={language.logo}
              width={110}
              height={110}
              alt={language.name}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      <div className="text-gray-400 text-lg md:text-[1vw] leading-none -ml-[0.05em] md:ml-[24.5vw] pt-32 pb-12">
        Tools
      </div>
      <div
        ref={toolsListRef}
        className="w-full flex justify-between md:justify-center items-start gap-6 md:gap-[6vw]"
      >
        {TOOLS.map((tool, idx) => (
          <div
            key={idx}
            ref={(el) => (toolsRef.current[idx] = el)}
            className="w-full md:w-[9vw] aspect-square bg-gray-500 flex justify-center items-center p-5"
          >
            <Image
              src={tool.logo}
              width={110}
              height={110}
              alt={tool.name}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
