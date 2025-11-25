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
        "text-dark uppercase py-1.5 bg-light border-2 rounded-full text-lg md:text-xl font-fixel-medium text-center",
        "hover:bg-red-500 hover:border-red-500 hover:!text-light transition-all ease-in-out duration-200",
        classNames,
      )}
    >
      {children}
    </a>
  );
};
