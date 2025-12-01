import Image from "next/image";
import classnames from "classnames";
import React from "react";

export const TechStackBoxNew = ({ name, logo, classNames }) => {
  return (
    <div
      className={classnames(
        "relative w-52 py-3 text-gray-500 border-2 border-gray-500 rounded-full flex justify-center items-center",
        classNames,
      )}
    >
      {/*<Image*/}
      {/*  src={logo}*/}
      {/*  width={110}*/}
      {/*  height={110}*/}
      {/*  draggable={false}*/}
      {/*  className="w-full h-auto"*/}
      {/*  alt={name}*/}
      {/*/>*/}
      <div className="text-xl">#{name}</div>
    </div>
  );
};
