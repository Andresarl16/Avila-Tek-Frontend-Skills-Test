import { priceCards } from "@/constants/PriceCards";
import Badge from "@/ui/components/Badge";
import Card from "@/ui/components/Card";
import CardSection from "@/ui/components/CardSection";
import GoogleDriveIcon from "@/ui/icons/GoogleDriveIcon";
import NotionIcon from "@/ui/icons/NotionIcon";
import Image from "next/image";

export default function Home() {
  const card = {
    svg: NotionIcon,
    title: "Notion Integration",
    description:
      "Work faster and smarter by integrating directly with Notion, right in the app.",
    redirectTo: "",
  };

  return (
    <main className="">
      <section>
        <CardSection
          badge="Integrations"
          title="Get more value from your tools"
          description="Connect your tools, connect your teams. With over 100 apps already
        available in our directory, your team’s favourite tools are just a click
        away."
          cards={priceCards}
        />
      </section>
    </main>
  );
}
