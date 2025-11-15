import React from "react";
import classnames from "classnames";

export const Button = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={classnames(
        "max-w-32 w-full py-2 border rounded-lg text-lg md:text-xl",
        "hover:bg-white hover:text-black transition-all ease-in-out duration-200",
      )}
    >
      {children}
    </a>
  );
};
