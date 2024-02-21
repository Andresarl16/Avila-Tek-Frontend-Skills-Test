import { Card } from "@/models/CardModel";
import BreakoutSquareIcon from "@/ui/icons/BreakoutSquareIcon";
import ChatCircleIcon from "@/ui/icons/ChatCircleIcon";
import ZapIcon from "@/ui/icons/ZapIcon";

export const featureCards: Array<Card> = [
  {
    svg: ChatCircleIcon,
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    svg: ZapIcon,
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    svg: BreakoutSquareIcon,
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
];
