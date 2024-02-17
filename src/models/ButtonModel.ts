export type ButtonTypes = "primary" | "secondary" | "tertiary";

export interface Button {
  text: string;
  type: ButtonTypes;
  redirectTo: string;
}
