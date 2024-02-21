import { Card } from "@/models/CardModel";
import DropboxIcon from "@/ui/icons/DropboxIcon";
import GoogleDriveIcon from "@/ui/icons/GoogleDriveIcon";
import IntercomIcon from "@/ui/icons/IntercomIcon";
import JiraIcon from "@/ui/icons/JiraIcon";
import NotionIcon from "@/ui/icons/NotionIcon";
import SlackIcon from "@/ui/icons/SlackIcon";

export const integrationCards: Array<Card> = [
  {
    svg: NotionIcon,
    title: "Notion Integration",
    description:
      "Work faster and smarter by integrating directly with Notion, right in the app.",
  },
  {
    svg: SlackIcon,
    title: "Slack Integration",
    description:
      "Work faster and smarter by integrating directly with Slack, right in the app.",
  },
  {
    svg: GoogleDriveIcon,
    title: "Google Drive Integration",
    description:
      "Work faster and smarter by integrating directly with Google Drive, right in the app.",
  },
  {
    svg: IntercomIcon,
    title: "Intercom Integration",
    description:
      "Work faster and smarter by integrating directly with Intercom, right in the app.",
  },
  {
    svg: JiraIcon,
    title: "Jira Integration",
    description:
      "Work faster and smarter by integrating directly with Jira, right in the app.",
  },
  {
    svg: DropboxIcon,
    title: "Dropbox Integration",
    description:
      "Work faster and smarter by integrating directly with Dropbox, right in the app.",
  },
];
