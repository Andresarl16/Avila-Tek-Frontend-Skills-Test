import { Button } from "./ButtonModel";

export interface NavbarLink {
  text: string;
  section: string;
}

export interface NavbarModel {
  start: Array<NavbarLink>;
  end: Array<Button>;
}
