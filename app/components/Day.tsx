"use client";

import { useState } from "react";
import { tv } from "tailwind-variants";

export default function Day({ value }: Readonly<{ value: number }>) {
  const [on, setOn] = useState(false);
  const hexagon = tv({
    base: "hexagon absolute inset-0 m-auto flex items-center justify-center text-2xl font-bold cursor-pointer",
  });
  const innerHexagon = tv({
    extend: hexagon,
    base: "scale-75 group-hover:bg-yellow-300 group-hover:text-amber-800 font-bold transition-colors duration-100",
    variants: {
      on: {
        true: "bg-yellow-300 text-amber-800",
        false: "bg-amber-800  text-yellow-300",
      },
    },
    defaultVariants: {
      on: false,
    },
  });
  const outerHexagon = tv({
    extend: hexagon,
    base: " group-hover:text-yellow-300 transition-colors duration-100",
    variants: {
      on: {
        true: "bg-amber-800  ",
        false: "bg-yellow-300 ",
      },
    },
    defaultVariants: {
      on: false,
    },
  });
  return (
    <div className="group relative h-10 w-10" onClick={() => setOn(!on)}>
      <div className={outerHexagon({ on })}></div>
      {/* Inner hexagon */}
      <div className={innerHexagon({ on })}>{value}</div>
    </div>
  );
}
