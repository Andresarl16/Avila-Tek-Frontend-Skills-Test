export type ButtonTypes = "primary" | "secondary" | "tertiary";
export type ActionTypes =
  | "function"
  | "internal-redirect"
  | "external-redirect";

export interface Button {
  text: string;
  type: ButtonTypes;
  actionType: ActionTypes;
  redirectTo?: string;
  onClick?: () => void;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
}
