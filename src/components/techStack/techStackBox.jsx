import React, { useState } from "react";
import classnames from "classnames";
import Image from "next/image";

export const TechStackBox = ({ name, logo, classNames }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipText, setTooltipText] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (text) => {
    setIsHovered(true);
    setTooltipText(text);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTooltipText("");
  };

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      className={classnames(
        "relative w-36 md:w-40 aspect-square bg-dark flex justify-center items-center p-5",
        classNames,
      )}
      onMouseEnter={() => handleMouseEnter(name)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={logo}
        width={110}
        height={110}
        draggable={false}
        className="w-full h-auto"
        alt={name}
      />
      {isHovered && tooltipText === name && (
        <div
          className="absolute bg-white/70 backdrop-blur-xs text-dark text-sm px-4 py-1 rounded-full z-[999]"
          style={{
            top: mousePosition.y + 10,
            left: mousePosition.x + 10,
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
};
