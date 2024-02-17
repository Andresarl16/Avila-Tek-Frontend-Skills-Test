import { featureCards } from "@/constants/FeatureCards";
import { integrationCards } from "@/constants/IntegrationCards";
import Button from "@/ui/components/Button";
import CardSection from "@/ui/components/CardSection";
import Image from "next/image";
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
      <section className="grid grid-cols-12 mb-16 md:mb-20 lg:mb-24 ">
        <div className="grid col-start-2 col-span-10 grid-cols-12 bg-bg-brand-section rounded-t-2xl rounded-b-3xl lg:rounded-l-2xl lg:rounded-r-3xl">
          <div className="flex flex-col justify-center col-span-12 lg:col-span-7 px-16">
            <h3 className="text-4xl text-text-brand-primary font-semibold">
              Give us a Shot
            </h3>
            <p className="mt-8 mb-12 text-xl text-text-brand-tertiary">
              Join over 4,000+ startups already growing with Untitled.
            </p>
            <div className="flex space-x-3">
              <Button text="Learn More" type="secondary" redirectTo="" />
              <Button text="Get started" type="primary" redirectTo="" />
            </div>
          </div>
          <div className="relative h-72 lg:h-100 col-span-12 lg:col-span-5 rounded-b-2xl lg:rounded-r-2xl">
            <Image
              alt="Give us a shoot image"
              src={"/static/give-us-a-shoot.jpg"}
              layout="fill"
              objectFit="cover"
              className="rounded-b-2xl lg:rounded-r-2xl"
            />
          </div>
        </div>
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
