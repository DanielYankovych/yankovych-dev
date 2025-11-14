"use client";

import { useEffect, useState } from "react";

const name = "DANIYELYANKOVYCH";

export default function Loading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevState) => (prevState + 1) % name.length);
    }, 150);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="text-8xl font-semibold animate-letter-flip">
        {name[index]}
      </div>
    </div>
  );
}
