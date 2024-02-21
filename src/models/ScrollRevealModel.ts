export type Origin = "top" | "bottom" | "right" | "left";

export type Easing = "ease" | "ease-in" | "ease-out" | "ease-in-out";

export interface ScrollRevealModel {
  duration: number;
  delay: number;
  distance: string;
  easing: Easing;
  origin: Origin;
}
