export type Positions = "top" | "right" | "bottom" | "left";

export interface Tooltip {
  text: string;
  position: Positions;
  children: any;
}
