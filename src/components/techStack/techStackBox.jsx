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
        "relative w-full md:w-[9vw] aspect-square bg-gray-500 flex justify-center items-center p-5",
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
        alt={name}
        className="w-full h-auto"
      />
      {isHovered && tooltipText === name && (
        <div
          className="absolute bg-white/50 backdrop-blur-xs text-gray-500 px-4 py-1 rounded-full z-50"
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
