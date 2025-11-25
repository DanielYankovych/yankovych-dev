"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/button";
import { EMAIL_LINK, LINKEDIN_LINK } from "@/data";
import Link from "next/link";
import FallingText from "@/components/FallingText";

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
    <div ref={sectionRef} className="size-full relative">
      <div className="absolute w-full bottom-1/3 left-0 flex justify-end items-center z-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <Link
            href="/cv/frontend-cv.pdf"
            download="Frontend Developer Daniel Yankovych CV - CA.pdf"
            className="text-white font-fixel-medium text-lg md:text-xl underline underline-offset-8 hover:text-red-500 transition-all ease-in-out duration-200"
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
      </div>
      <FallingText
        text="Get in touch"
        highlightClass="highlighted"
        trigger="scroll"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.3}
        mouseConstraintStiffness={0.9}
      />
    </div>
  );
};
