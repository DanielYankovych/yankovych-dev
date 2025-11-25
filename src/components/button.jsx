"use client";

import React from "react";
import classnames from "classnames";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const Button = ({ href, classNames, children }) => {
  const handleClick = (e) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      gsap.to(window, {
        duration: 1.3,
        ease: "power3.inOut",
        scrollTo: href,
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={classnames(
        "relative flex justify-center items-center text-center overflow-hidden outline-none",
        "text-dark uppercase py-2 bg-light rounded-full text-lg md:text-xl font-fixel-medium",
        "hover:scale-105 hover:shadow-[0_0_20px_rgba(183,41,41,0.8)] transition-all ease-in-out duration-300 holo-button",
        classNames,
      )}
    >
      <span>{children}</span>
    </a>
  );
};
