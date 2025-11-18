"use client";

import React from "react";
import classnames from "classnames";

export const Button = ({ href, classNames, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={classnames(
        "text-white uppercase py-1 border-2 rounded-full text-lg md:text-xl font-fixel-bold text-center",
        "hover:bg-red-500 hover:border-red-500 transition-all ease-in-out duration-200",
        classNames,
      )}
    >
      {children}
    </a>
  );
};
