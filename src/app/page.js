"use client";

import { useEffect, useRef } from "react";
import { Title } from "@/components/title";
import { PageLoader } from "@/components/pageLoader";
import { TechStack } from "@/components/techStack";
import { WorkWay } from "@/components/workWay";

export default function Home() {
  const titleRef = useRef();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageLoader
        onExpand={() => {
          titleRef.current.animate();
        }}
      />
      <div className="w-full h-auto font-fixel-extra-bold uppercase">
        <div className="w-full h-dvh p-4 md:p-8">
          <Title ref={titleRef} />
        </div>
        <TechStack />
        <WorkWay />
      </div>
    </>
  );
}
