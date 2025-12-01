"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Title } from "@/components/title";
import { PageLoader } from "@/components/main/pageLoader";
import { TechStack } from "@/components/techStack/techStack";
import { WorkWay } from "@/components/workWay";
import { GetInTouch } from "@/components/getInTouch";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HomepageCanvas } from "@/components/main/homepageCanvas";

export const Homepage = () => {
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

      const showCanvas = () => {
        gsap.to(".homepage-canvas", {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      const hideCanvas = () => {
        gsap.to(".homepage-canvas", {
          opacity: 0,
          duration: 0,
          ease: "power2.out",
        });
      };

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
        onEnter: () => {
          setBg("#131010");
          hideCanvas();
          window.dispatchEvent(new Event("canvas-dark"));
        },
        onEnterBack: () => {
          setBg("#131010");
          hideCanvas();
          window.dispatchEvent(new Event("canvas-dark"));
        },
      });

      ScrollTrigger.create({
        trigger: techStackSectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setBg("#F3F3F3");
          showCanvas();
          window.dispatchEvent(new Event("canvas-light"));
        },
        onEnterBack: () => {
          setBg("#F3F3F3");
          showCanvas();
          window.dispatchEvent(new Event("canvas-light"));
        },
      });

      ScrollTrigger.create({
        trigger: workWaySectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setBg("#F3F3F3");
          showCanvas();
          window.dispatchEvent(new Event("canvas-light"));
        },
        onEnterBack: () => {
          setBg("#F3F3F3");
          showCanvas();
          window.dispatchEvent(new Event("canvas-light"));
        },
      });

      ScrollTrigger.create({
        trigger: contactSectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setBg("#131010");
          hideCanvas();
          window.dispatchEvent(new Event("canvas-dark"));
        },
        onEnterBack: () => {
          setBg("#131010");
          hideCanvas();
          window.dispatchEvent(new Event("canvas-dark"));
        },
      });
    });

    return () => ctx.revert();
  }, [loaderDone]);

  return (
    <>
      {loaderDone && <HomepageCanvas />}

      <PageLoader
        onExpand={() => {
          titleRef.current.animate();
          setLoaderDone(true);
        }}
      />
      <div className="w-full h-auto font-fixel-extra-bold uppercase overflow-x-hidden z-1 relative">
        <div ref={titleSectionRef} className="w-full h-dvh p-3 md:p-8">
          <Title ref={titleRef} />
        </div>

        <div
          ref={techStackSectionRef}
          className="px-3 md:px-8 pt-20 md:pt-40 pb-12 md:pb-28"
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
};
