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

      const progress = Math.min(scrollY / sectionHeight, 1);
      const value = Math.floor(progress * 255);

      body.style.backgroundColor = `rgb(${value}, ${value}, ${value})`;
    }

    window.addEventListener("scroll", onScroll);

    onScroll();

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
              <div className="text-red-500 text-3xl md:text-[6vw] leading-none -ml-[0.05em]">
                Hello, I&apos;m
              </div>
            </SlideInText>
            <SlideInText direction="left" delay={0.3}>
              <div className="text-6xl md:text-[12vw] -ml-[0.06em]">
                Daniyel
              </div>
            </SlideInText>
            <SlideInText
              direction="right"
              delay={0.6}
              classNames="md:ml-[22vw] -mt-1 md:-mt-4 xl:-mt-8 text-right md:text-left"
            >
              <div className="text-5xl md:text-[12vw] leading-none ml-[0.01em]">
                Yankovych
              </div>
            </SlideInText>
            <SlideInText
              direction="right"
              delay={0.9}
              classNames="md:ml-[22vw] mt-1 md:mt-0 md:pl-10 text-right md:text-left"
            >
              <div className="text-red-500 text-3xl md:text-[6vw] leading-none text-nowrap">
                Frontend Developer
              </div>
            </SlideInText>
          </div>
          <div className="w-full" />
        </div>
      </div>
      <div className="w-full p-4 md:px-8 md:py-10">
        <div className="size-full flex flex-col">
          <div className="md:ml-[22vw] flex flex-col justify-center items-start gap-2 md:pl-10 text-red-500 text-xl md:text-[3vw] leading-tight">
            <SlideInText direction="bottom" delay={0}>
              <div className="pl-16 md:pl-32">Every project has its own</div>
            </SlideInText>
            <SlideInText direction="bottom" delay={0.3}>
              character, so i adapt my process
            </SlideInText>
            <SlideInText direction="bottom" delay={0.6}>
              to what it needs — sometimes
            </SlideInText>
            <SlideInText direction="bottom" delay={0.9}>
              structured and straightforward,
            </SlideInText>
            <SlideInText direction="bottom" delay={1.2}>
              sometimes more exploratory
            </SlideInText>
            <SlideInText direction="bottom" delay={1.5}>
              and creative.
            </SlideInText>
          </div>
          <SlideInText direction="left" delay={1.8} classNames="my-14 md:my-20">
            <div className="text-gray-500 text-3xl md:text-[6vw] leading-none -ml-[0.05em]">
              My tech stack
            </div>
          </SlideInText>
          <SlideInText
            direction="left"
            delay={2.1}
            classNames="md:ml-[22vw] md:pl-10 mb-14"
          >
            <div className="text-gray-400 text-lg md:text-[2vw] leading-none -ml-[0.05em]">
              Frameworks
            </div>
          </SlideInText>
          <div className="w-full flex justify-between md:justify-center items-center gap-6 md:gap-[6vw]">
            <SlideInText
              direction="bottom"
              delay={0.3}
              classNames="w-full md:w-auto"
            >
              <div className="w-full md:w-[9vw] aspect-square bg-gray-500"></div>
            </SlideInText>
            <SlideInText
              direction="bottom"
              delay={0.6}
              classNames="w-full md:w-auto"
            >
              <div className="w-full md:w-[9vw] aspect-square bg-gray-500"></div>
            </SlideInText>
            <SlideInText
              direction="bottom"
              delay={0.9}
              classNames="w-full md:w-auto"
            >
              <div className="w-full md:w-[9vw] aspect-square bg-gray-500"></div>
            </SlideInText>
          </div>
          <SlideInText
            direction="left"
            delay={2.1}
            classNames="md:ml-[22vw] md:pl-10 my-14"
          >
            <div className="text-gray-400 text-lg md:text-[2vw] leading-none -ml-[0.05em]">
              Programming languages
            </div>
          </SlideInText>
          <div className="w-full flex justify-center items-center gap-6 md:gap-[6vw]">
            <SlideInText
              direction="bottom"
              delay={0.3}
              classNames="w-full md:w-auto"
            >
              <div className="w-full md:w-[9vw] aspect-square bg-gray-500"></div>
            </SlideInText>
            <SlideInText
              direction="bottom"
              delay={0.6}
              classNames="w-full md:w-auto"
            >
              <div className="w-full md:w-[9vw] aspect-square bg-gray-500"></div>
            </SlideInText>
            <SlideInText
              direction="bottom"
              delay={0.9}
              classNames="w-full md:w-auto"
            >
              <div className="w-full md:w-[9vw] aspect-square bg-gray-500"></div>
            </SlideInText>
          </div>
          <SlideInText
            direction="left"
            delay={2.1}
            classNames="md:ml-[22vw] md:pl-10 my-14"
          >
            <div className="text-gray-400 text-lg md:text-[2vw] leading-none -ml-[0.05em]">
              Tools
            </div>
          </SlideInText>
          <div className="w-full flex justify-center items-center gap-2 md:gap-[3vw]">
            <SlideInText
              direction="bottom"
              delay={0.3}
              classNames="w-full md:w-auto"
            >
              <div className="w-full md:w-[9vw] aspect-square bg-gray-500"></div>
            </SlideInText>
            <SlideInText
              direction="bottom"
              delay={0.6}
              classNames="w-full md:w-auto"
            >
              <div className="w-full md:w-[9vw] aspect-square bg-gray-500"></div>
            </SlideInText>
            <SlideInText
              direction="bottom"
              delay={0.9}
              classNames="w-full md:w-auto"
            >
              <div className="w-full md:w-[9vw] aspect-square bg-gray-500"></div>
            </SlideInText>
            <SlideInText
              direction="bottom"
              delay={1.2}
              classNames="w-full md:w-auto"
            >
              <div className="w-full md:w-[9vw] aspect-square bg-gray-500"></div>
            </SlideInText>
          </div>
        </div>
      </div>
    </div>
  );
}
