"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Title } from "@/components/title";
import { PageLoader } from "@/components/pageLoader";
import { TechStack } from "@/components/techStack/techStack";
import { WorkWay } from "@/components/workWay";
import { GetInTouch } from "@/components/getInTouch";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Home() {
  const titleSectionRef = useRef(null);
  const techStackSectionRef = useRef(null);
  const workWaySectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const titleRef = useRef(null);

  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    if (!loaderDone) return;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const setBg = (color) => {
        gsap.to("body", {
          backgroundColor: color,
          duration: 1,
          ease: "power2.out",
        });
      };

      ScrollTrigger.create({
        trigger: titleSectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setBg("#131010"),
        onEnterBack: () => setBg("#131010"),
      });

      ScrollTrigger.create({
        trigger: techStackSectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setBg("#F3F3F3"),
        onEnterBack: () => setBg("#F3F3F3"),
      });

      ScrollTrigger.create({
        trigger: workWaySectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setBg("#F3F3F3"),
        onEnterBack: () => setBg("#F3F3F3"),
      });

      ScrollTrigger.create({
        trigger: contactSectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setBg("#131010"),
        onEnterBack: () => setBg("#131010"),
      });
    });

    return () => ctx.revert();
  }, [loaderDone]);

  return (
    <>
      <PageLoader
        onExpand={() => {
          titleRef.current.animate();
          setLoaderDone(true);
        }}
      />
      <div className="w-full h-auto font-fixel-extra-bold uppercase overflow-x-hidden">
        <div ref={titleSectionRef} className="w-full h-dvh p-3 md:p-8">
          <Title ref={titleRef} />
        </div>

        <div
          ref={techStackSectionRef}
          className="p-3 md:px-8 md:pt-40 md:pb-28"
        >
          <TechStack />
        </div>

        <div ref={workWaySectionRef} className="p-3 md:p-8">
          <WorkWay />
        </div>

        <div
          ref={contactSectionRef}
          className="w-full h-dvh p-3 md:px-8 md:py-4"
          id="get-in-touch"
        >
          <GetInTouch />
        </div>
      </div>
    </>
  );
}
