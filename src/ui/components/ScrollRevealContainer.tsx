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
}: ScrollRevealModel & { children: ReactNode }) => {
  useEffect(() => {
    ScrollReveal().reveal(".scroll-reveal-container", {
      duration: duration,
      delay: delay,
      distance: distance,
      easing: easing,
      origin: origin,
    });
  }, [delay, distance, duration, easing, origin]);

  return <div className="scroll-reveal-container">{children}</div>;
};

export default ScrollRevealContainer;
