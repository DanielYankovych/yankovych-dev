"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const PageLoader = ({ onExpand }) => {
  const boxRef = useRef();
  const loaderRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("body", { overflowY: "hidden" });

      const tl = gsap.timeline({
        onComplete: () => {},
      });

      tl.to(boxRef.current, {
        rotate: "+=45",
        duration: 0.6,
        repeat: 5,
        repeatRefresh: true,
        ease: "power2.inOut",
      })

        .to(boxRef.current, {
          scale: 30,
          rotate: 0,
          duration: 3,
          ease: "power4.inOut",
          onComplete: () => {
            if (onExpand) onExpand();
          },
        })

        .to("body", {
          backgroundColor: "#000",
          duration: 0,
          ease: "none",
        })

        .to(loaderRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        })

        .set("body", { overflowY: "auto" })
        .set(loaderRef.current, { display: "none" });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="loader fixed inset-0 flex items-center justify-center bg-transparent z-50"
    >
      <div ref={boxRef} className="loader-box w-20 h-20 bg-black"></div>
    </div>
  );
};
