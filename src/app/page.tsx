import { featureCards } from "@/constants/FeatureCards";
import { integrationCards } from "@/constants/IntegrationCards";
import CardSection from "@/ui/components/sections/CardSection";
import FAQ from "@/ui/components/sections/FAQ";
import FreeTrial from "@/ui/components/sections/FreeTrial";
import GiveUsAShoot from "@/ui/components/sections/GiveUsAShoot";
import Header from "@/ui/components/sections/Header";
import Reviews from "@/ui/components/sections/Reviews";

export default function Home() {
  return (
    <main className="max-w-full grid grid-cols-12">
      <Header></Header>
      <CardSection
        badge="Integrations"
        title="Get more value from your tools"
        description="Connect your tools, connect your teams. With over 100 apps already
        available in our directory, your team’s favourite tools are just a click
        away."
        cards={integrationCards}
        iconSizes="medium"
      />
      <GiveUsAShoot></GiveUsAShoot>
      <CardSection
        badge="Features"
        title="Cutting-edge features for advanced analytics"
        description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
        cards={featureCards}
        iconSizes="small"
      />
      <FreeTrial></FreeTrial>
      <FAQ></FAQ>
      <Reviews></Reviews>
    </main>
  );
}
