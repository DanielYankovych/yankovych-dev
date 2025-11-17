"use client";
import { useEffect, useRef, useState } from "react";
import classnames from "classnames";

export default function SlideInText({
  children,
  direction = "left", // "left" | "right" | "top" | "bottom"
  delay = 0,
  classNames,
}) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Direction offsets
  const distanceMap = {
    left: "-120px",
    right: "120px",
    top: "-120px",
    bottom: "120px",
  };

  const distance = distanceMap[direction] ?? "-120px";

  // Choose axis depending on direction
  const transformStart =
    direction === "left" || direction === "right"
      ? `translateX(${distance})`
      : `translateY(${distance})`;

  const transformEnd = "translateX(0) translateY(0)";

  return (
    <div
      ref={ref}
      className={classnames("inline-block", classNames)}
      style={{
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",

        opacity: show ? 1 : 0,
        transform: show ? transformEnd : transformStart,

        transition: `
          transform 1.6s cubic-bezier(.16,1,.3,1) ${delay}s,
          opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}s
        `,
      }}
    >
      {children}
    </div>
  );
}
