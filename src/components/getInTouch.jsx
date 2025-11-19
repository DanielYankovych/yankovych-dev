"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/button";
import { EMAIL_LINK, LINKEDIN_LINK } from "@/data";
import Link from "next/link";

export const GetInTouch = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
    <div
      ref={sectionRef}
      className="size-full flex flex-col justify-end items-start"
    >
      <div className="flex flex-col justify-start items-end gap-20">
        <div className="flex flex-col justify-center items-center gap-10">
          <Link
            href="/cv/frontend-cv.pdf"
            download="Frontend Developer Daniel Yankovych CV - CA.pdf"
            className="text-white font-fixel-bold text-lg md:text-xl underline underline-offset-8 hover:text-red-500 transition-all ease-in-out duration-200"
          >
            Download my CV
          </Link>
          <div className="flex justify-center items-center gap-10">
            <Button href={LINKEDIN_LINK} classNames="min-w-40 w-full">
              LinkedIn
            </Button>
            <Button href={EMAIL_LINK} classNames="min-w-40 w-full">
              Email
            </Button>
          </div>
        </div>
        <div className="text-red-500 text-6xl md:text-[12vw] -mr-[0.06em]">
          Get in touch
        </div>
      </div>
    </div>
  );
};
