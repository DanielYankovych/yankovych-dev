"use client";

import { Button } from "@/components/button";
import SlideInText from "@/components/slideInText";
import { useEffect } from "react";

const LINKEDIN = "https://www.linkedin.com/in/daniel-yankovych/";
const EMAIL = "mailto:d.yankovych@gmail.com";
const GITHUB = "https://github.com/DanielYankovych";

export default function Home() {
  useEffect(() => {
    const body = document.body;

    function onScroll() {
      const sectionHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // progress between 0 → 1 while scrolling inside 1st section
      const progress = Math.min(scrollY / sectionHeight, 1);

      // interpolate between black → white
      const value = Math.floor(progress * 255);

      body.style.backgroundColor = `rgb(${value}, ${value}, ${value})`;
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full h-auto font-fixel-extra-bold uppercase overflow-hidden">
      <div className="w-full h-dvh p-4 md:p-8">
        <div className="size-full flex flex-col justify-between">
          <div className="w-full flex justify-end items-center">
            <Button>Get in touch</Button>
          </div>
          <div className="w-full flex flex-col">
            <SlideInText direction="left" delay={0} classNames="mb-1 md:mb-0">
              <div className="text-red-500 text-2xl md:text-[6vw] leading-none -ml-[0.05em]">
                Hello, I&apos;m
              </div>
            </SlideInText>
            <SlideInText direction="left" delay={0.3}>
              <div className="text-5xl md:text-[12vw] -ml-[0.06em]">
                Daniyel
              </div>
            </SlideInText>
            <SlideInText
              direction="right"
              delay={0.6}
              classNames="ml-[22vw] -mt-1 md:-mt-4 xl:-mt-8"
            >
              <div className="text-5xl md:text-[12vw] leading-none ml-[0.01em]">
                Yankovych
              </div>
            </SlideInText>
            <SlideInText
              direction="right"
              delay={0.9}
              classNames="ml-[22vw] mt-1 md:mt-0 pl-10"
            >
              <div className="text-red-500 text-2xl md:text-[6vw] leading-none">
                Frontend Developer
              </div>
            </SlideInText>
          </div>
          <div className="w-full" />
        </div>
      </div>
      <div className="w-full p-4 md:px-8 md:py-10">
        <div className="size-full flex flex-col">
          <div className="ml-[22vw] flex flex-col justify-center items-start gap-2 pl-10">
            <SlideInText direction="bottom" delay={0}>
              <div className="text-red-500 text-5xl pl-32">
                Every project has its own
              </div>
            </SlideInText>
            <SlideInText direction="bottom" delay={0.3}>
              <div className="text-red-500 text-5xl">
                character, so i adapt my process
              </div>
            </SlideInText>
            <SlideInText direction="bottom" delay={0.6}>
              <div className="text-red-500 text-5xl">
                to what it needs — sometimes
              </div>
            </SlideInText>
            <SlideInText direction="bottom" delay={0.9}>
              <div className="text-red-500 text-5xl">
                structured and straightforward,
              </div>
            </SlideInText>
            <SlideInText direction="bottom" delay={1.2}>
              <div className="text-red-500 text-5xl">
                sometimes more exploratory
              </div>
            </SlideInText>
            <SlideInText direction="bottom" delay={1.5}>
              <div className="text-red-500 text-5xl">and creative.</div>
            </SlideInText>
          </div>
          <SlideInText direction="left" delay={1.8} classNames="my-20">
            <div className="text-gray-500 text-2xl md:text-[6vw] leading-none -ml-[0.05em]">
              My tech stack
            </div>
          </SlideInText>
          <SlideInText
            direction="left"
            delay={2.1}
            classNames="ml-[22vw] pl-10 mb-14"
          >
            <div className="text-gray-400 text-2xl leading-none -ml-[0.05em]">
              Frameworks
            </div>
          </SlideInText>
          <div className="w-full flex justify-center items-center gap-28">
            <SlideInText direction="bottom" delay={0.3}>
              <div className="size-40 bg-gray-500"></div>
            </SlideInText>
            <SlideInText direction="bottom" delay={0.6}>
              <div className="size-40 bg-gray-500"></div>
            </SlideInText>
            <SlideInText direction="bottom" delay={0.9}>
              <div className="size-40 bg-gray-500"></div>
            </SlideInText>
          </div>
          <SlideInText
            direction="left"
            delay={2.1}
            classNames="ml-[22vw] pl-10 my-14"
          >
            <div className="text-gray-400 text-2xl leading-none -ml-[0.05em]">
              Programming languages
            </div>
          </SlideInText>
          <div className="w-full flex justify-center items-center gap-28">
            <SlideInText direction="bottom" delay={0.3}>
              <div className="size-40 bg-gray-500"></div>
            </SlideInText>
            <SlideInText direction="bottom" delay={0.6}>
              <div className="size-40 bg-gray-500"></div>
            </SlideInText>
            <SlideInText direction="bottom" delay={0.9}>
              <div className="size-40 bg-gray-500"></div>
            </SlideInText>
          </div>
          <SlideInText
            direction="left"
            delay={2.1}
            classNames="ml-[22vw] pl-10 my-14"
          >
            <div className="text-gray-400 text-2xl leading-none -ml-[0.05em]">
              Tools
            </div>
          </SlideInText>
          <div className="w-full flex justify-center items-center gap-14">
            <SlideInText direction="bottom" delay={0.3}>
              <div className="size-40 bg-gray-500"></div>
            </SlideInText>
            <SlideInText direction="bottom" delay={0.6}>
              <div className="size-40 bg-gray-500"></div>
            </SlideInText>
            <SlideInText direction="bottom" delay={0.9}>
              <div className="size-40 bg-gray-500"></div>
            </SlideInText>
            <SlideInText direction="bottom" delay={1.2}>
              <div className="size-40 bg-gray-500"></div>
            </SlideInText>
          </div>
        </div>
      </div>
    </div>
  );
}
