import React from "react";

export const Header = () => {
  return (
    <div className="w-full h-12 fixed inset-0 px-2">
      <div className="size-full flex justify-center md:justify-between items-center">
        <div className="flex justify-start items-start gap-1 font-medium text-4xl">
          <span>&#123;</span>
          <span className="pt-0.5">DY</span>
          <span>&#125;</span>
        </div>
      </div>
    </div>
  );
};
