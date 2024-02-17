import { priceCards } from "@/constants/PriceCards";
import Card from "@/ui/components/Card";
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
      <section className="grid grid-cols-12">
        <h3 className="grid col-start-3 col-span-8 text-4xl text-center font-semibold text-text-primary">
          Get more value from your tools
        </h3>
        <p className="grid col-start-3 col-span-8 mt-6 mb-16 text-xl text-center text-text-tertiary">
          Connect your tools, connect your teams. With over 100 apps already
          available in our directory, your team’s favourite tools are just a
          click away.
        </p>
        <div className="grid col-start-2 col-span-10 grid-cols-3 gap-x-10 gap-y-16">
          {priceCards.map((card) => (
            <Card key={card.title} card={card}></Card>
          ))}
        </div>
      </section>
    </main>
  );
}
