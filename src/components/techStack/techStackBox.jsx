import React from "react";
import classnames from "classnames";
export const TechStackBox = ({ name, classNames }) => {
  return (
    <div
      className={classnames(
        "relative w-40 md:w-52 py-3 border-2 border-dark rounded-full",
        "flex justify-center items-center",
        "bg-light/10 backdrop-blur-xs",
        classNames,
      )}
    >
      <div className="text-lg md:text-xl">#{name}</div>
    </div>
  );
};
