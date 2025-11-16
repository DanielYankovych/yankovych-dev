"use client";

import React, { useEffect, useState } from "react";
import classnames from "classnames";

export const Button = ({ href, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 20);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      className={classnames(
        "uppercase max-w-40 w-full py-1 border-2 rounded-full text-lg md:text-xl font-fixel-bold text-center",
        "hover:bg-red-500 hover:border-red-500 transition-all ease-in-out duration-200",
      )}
      style={{
        display: "inline-block",
        opacity: show ? 1 : 0,
        transform: show ? "scale(1)" : "scale(0)",
        borderRadius: "9999px",
        transition: `
          transform 0.9s cubic-bezier(.16,1,.3,1) 1.2s,
          opacity 0.5s ease-out 1.2s
        `,
      }}
    >
      {children}
    </a>
  );
};
