"use client";

import React, { forwardRef, useEffect, useRef } from "react";
import { TechStackBox } from "@/components/techStack/techStackBox";
import classnames from "classnames";

export const TechStackSwiper = forwardRef(({ data, classNames }, ref) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      el.classList.add("dragging");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      el.classList.remove("dragging");
    };

    const onMouseUp = () => {
      isDown = false;
      el.classList.remove("dragging");
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed
      el.scrollLeft = scrollLeft - walk;
    };

    // Mouse wheel horizontal support
    const onWheel = (e) => {
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth;
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      const isVerticalGesture = Math.abs(delta) > Math.abs(e.deltaX);

      if (
        isVerticalGesture &&
        !(atStart && delta < 0) &&
        !(atEnd && delta > 0)
      ) {
        el.scrollTo({
          left: el.scrollLeft + delta,
          behavior: "auto",
        });
        e.preventDefault();
      }
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full mx-auto h-64 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
    >
      <div
        className={classnames(
          "w-full flex justify-start md:justify-center items-center gap-10 md:gap-16",
          classNames,
        )}
      >
        {data.map((d, idx) => (
          <div key={idx + 1} ref={(el) => (ref.current[idx] = el)}>
            <TechStackBox name={d.name} logo={d.logo} />
          </div>
        ))}
      </div>
    </div>
  );
});
