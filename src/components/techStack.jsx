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

  const frameworksRef = useRef([]);
  const languagesRef = useRef([]);
  const toolsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 30%",
        onEnter: () => {
          gsap.to("body", {
            backgroundColor: "#ffffff",
            duration: 1,
            ease: "power2.out",
          });
        },
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%",
        onLeaveBack: () => {
          gsap.to("body", {
            backgroundColor: "#000000",
            duration: 1,
            ease: "power2.out",
          });
        },
      });

      gsap.fromTo(
        paragraphRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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
        { x: 250 },
        {
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: frameworksRef.current,
            start: "top bottom",
            end: "top 70%",
            scrub: 3,
          },
        },
      );

      gsap.fromTo(
        languagesRef.current,
        { x: -250 },
        {
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: languagesRef.current,
            start: "top bottom",
            end: "top 70%",
            scrub: 4,
          },
        },
      );

      gsap.fromTo(
        toolsRef.current,
        { x: 250 },
        {
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: toolsRef.current,
            start: "top bottom",
            end: "top 70%",
            scrub: 5,
          },
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
    <div ref={sectionRef} className="w-full p-4 md:px-8 md:py-20">
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
        className="text-gray-500 text-3xl md:text-[6vw] leading-none -ml-[0.05em] my-12"
      >
        My tech stack
      </div>

      <div className="text-gray-400 text-lg md:text-[1vw] leading-none -ml-[0.05em] md:ml-[24.5vw] mb-12">
        Frameworks
      </div>
      <div className="w-full flex justify-between md:justify-center items-start gap-6 md:gap-[6vw]">
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

      <div className="text-gray-400 text-lg md:text-[1vw] leading-none -ml-[0.05em] md:ml-[24.5vw] my-12">
        Programming languages
      </div>
      <div className="w-full flex justify-between md:justify-center items-start gap-6 md:gap-[6vw]">
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

      <div className="text-gray-400 text-lg md:text-[1vw] leading-none -ml-[0.05em] md:ml-[24.5vw] my-12">
        Tools
      </div>
      <div className="w-full flex justify-between md:justify-center items-start gap-6 md:gap-[6vw]">
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
