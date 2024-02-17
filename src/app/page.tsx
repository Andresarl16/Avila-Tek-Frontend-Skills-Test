import { featureCards } from "@/constants/FeatureCards";
import { integrationCards } from "@/constants/IntegrationCards";
import CardSection from "@/ui/components/CardSection";
import NotionIcon from "@/ui/icons/NotionIcon";

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
          cards={integrationCards}
          iconSizes="medium"
        />
      </section>
      <section>
        <CardSection
          badge="Features"
          title="Cutting-edge features for advanced analytics"
          description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
          cards={featureCards}
          iconSizes="small"
        />
      </section>
    </main>
  );
}
