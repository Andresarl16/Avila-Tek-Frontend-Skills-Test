export interface Card {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  redirectTo: string;
}
