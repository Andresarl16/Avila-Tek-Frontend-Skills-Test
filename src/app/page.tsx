import { featureCards } from "@/constants/FeatureCards";
import { integrationCards } from "@/constants/IntegrationCards";
import Button from "@/ui/components/Button";
import CardSection from "@/ui/components/CardSection";
import GiveUsAShoot from "@/ui/components/sections/GiveUsAShoot";
import Header from "@/ui/components/sections/Header";
import Image from "next/image";

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
      <section className="grid grid-cols-12 bg-bg-secondary py-24">
        <div className="grid col-start-2 col-span-10 grid-cols-12">
          <div className="flex flex-col col-span-7 justify-center">
            <h2 className="text-5xl text-text-primary font-semibold">
              No long-term contracts. <br /> No catches.
            </h2>
            <p className="text-xl mt-6 mb-12 text-text-tertiary">
              Start your 30-day free trial today.
            </p>
            <div className="sm:flex space-x-0 space-y-3 sm:space-x-3 sm:space-y-0">
              <Button
                text="Learn more"
                type="secondary"
                redirectTo=""
                styles="border-2 border-border-button-secondary"
              />
              <Button text="Get started" type="primary" redirectTo="" />
            </div>
          </div>
          <div className="col-span-5 space-y-5">
            <div className="flex justify-center items-end space-x-5">
              <div className="relative w-40 h-40">
                {" "}
                <Image
                  alt=""
                  src={"/static/free-trial-mobile-image-1.png"}
                  fill={true}
                />{" "}
              </div>
              <div className="relative w-40 h-60">
                {" "}
                <Image
                  alt=""
                  src={"/static/free-trial-mobile-image-2.png"}
                  fill={true}
                />{" "}
              </div>
            </div>
            <div className="flex justify-center items-start space-x-5">
              <div className="relative w-48 h-32">
                {" "}
                <Image
                  alt=""
                  src={"/static/free-trial-mobile-image-5.png"}
                  fill={true}
                />{" "}
              </div>
              <div className="relative w-40 h-60">
                {" "}
                <Image
                  alt=""
                  src={"/static/free-trial-mobile-image-3.png"}
                  fill={true}
                />{" "}
              </div>
              <div className="relative w-48 h-32">
                {" "}
                <Image
                  alt=""
                  src={"/static/free-trial-mobile-image-4.png"}
                  fill={true}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
