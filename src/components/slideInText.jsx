"use client";
import { useEffect, useState } from "react";
import classnames from "classnames";

export default function SlideInText({
  children,
  direction = "left",
  delay = 0,
  classNames,
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 20);
    return () => clearTimeout(timer);
  }, []);

  const distance = direction === "left" ? "-120px" : "120px";

  return (
    <span
      className={classnames("w-full", classNames)}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateX(0)" : `translateX(${distance})`,
        transition: `
          transform 1.6s cubic-bezier(.16,1,.3,1) ${delay}s,
          opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}s
        `,
      }}
    >
      {children}
    </span>
  );
}
