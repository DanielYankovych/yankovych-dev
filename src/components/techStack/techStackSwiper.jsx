"use client";

import React, { forwardRef } from "react";
import { TechStackBox } from "@/components/techStack/techStackBox";
import classnames from "classnames";

export const TechStackSwiper = forwardRef(({ data, classNames }, ref) => {
  return (
    <div
      className={classnames(
        "w-full flex justify-center items-center flex-wrap gap-6 md:gap-10",
        classNames,
      )}
    >
      {data.map((d, idx) => (
        <div key={idx + 1} ref={(el) => (ref.current[idx] = el)}>
          <TechStackBox name={d.name} />
        </div>
      ))}
    </div>
  );
});
