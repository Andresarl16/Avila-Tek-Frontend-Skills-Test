"use client";

import { ScrollRevealModel } from "@/models/ScrollRevealModel";
import { ReactNode, useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealContainer = ({
  duration = 1000,
  delay = 200,
  distance = "100px",
  easing = "ease-in-out",
  origin = "bottom",
  children,
  id,
  className = "",
}: ScrollRevealModel & {
  children: ReactNode;
  id: string;
  className?: string;
}) => {
  useEffect(() => {
    ScrollReveal().reveal(`#${id}`, {
      duration: duration,
      delay: delay,
      distance: distance,
      easing: easing,
      origin: origin,
    });
  }, [delay, distance, duration, easing, id, origin]);

  return (
    <div id={id} className={`${className}`}>
      {children}
    </div>
  );
};

export default ScrollRevealContainer;
