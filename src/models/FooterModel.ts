import { Button } from "./ButtonModel";

export interface FooterButton extends Button {
  type: "tertiary";
  new: boolean;
  description: string;
}

export interface FooterLinks {
  name: string;
  footerLinks: Array<FooterButton>;
}

export interface FooterBadge {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  redirectTo: string;
}

export interface FooterBadges {
  name: string;
  badges: Array<FooterBadge>;
}

export interface FooterModel {
  linkColumns: Array<FooterLinks>;
  downloadBadges: FooterBadges;
}
