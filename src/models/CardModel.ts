export interface Card {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  redirectTo: string;
}

export interface CardSection {
  badge: string;
  title: string;
  description: string;
  cards: Array<Card>;
}
