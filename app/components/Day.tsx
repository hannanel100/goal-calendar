"use client";

import { useState } from "react";
import { tv } from "tailwind-variants";

export default function Day({ value }: Readonly<{ value: number }>) {
  const [on, setOn] = useState(false);
  const span = tv({
    base: "text-inherit font-bold text-2xl",
    variants: {
      on: {
        true: "text-black",
        false: "text-inherit font-bold text-2xl",
      },
    },
  });
  return (
    <div className="flex">
      <div
        className="w-0 h-0 
  border-t-[32px] border-t-transparent
  border-r-[18px] border-r-white
  border-b-[32px] border-b-transparent"
      ></div>
      <button
        className={`
        flex
        w-16
        h-16
        items-center
        justify-center
        bg-black
        border-2
        border-white
        border-r-transparent
        border-l-transparent
        duration-200
        ease-in-out 
        ${on ? "bg-white" : "hover:bg-white hover:text-black"}
        
      `}
        onClick={() => setOn(!on)}
      >
        <span className={span({ on: on })}>{value}</span>
      </button>
      <div
        className="w-0 h-0 
  border-t-[32px] border-t-transparent
  border-l-[18px] border-l-white
  border-b-[32px] border-b-transparent"
      ></div>
    </div>
  );
}
