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
    <main className="max-w-full">
      <header className="grid grid-cols-12 mt-0 sm:mt-8 mb-24 sm:mb-28 lg:mb-32">
        <div className="grid sm:col-start-2 col-span-12 sm:col-span-10 grid-cols-12 px-4 md:px-0 bg-bg-brand-section sm:rounded-2xl">
          <div className="sm:col-start-3 col-span-12 sm:col-span-8 pt-16 sm:pt-24 pb-24 sm:pb-48">
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-text-brand-primary text-center font-semibold">
              Grow your users. <br />
              <span className="text-text-brand-secondary">Smarter.</span>
            </h1>
            <p className="mt-4 sm:mt-5 lg:mt-6 mb-10 sm:mb-11 lg:mb-12 font-lg sm:font-xl text-text-brand-tertiary text-center">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
            <form action="" className="sm:flex justify-center sm:space-x-4">
              <div>
                <input type="text" className="h-12" />
                <p className="mb-4 sm:mb-0 text-sm text-text-brand-tertiary">
                  We care about your data in our{" "}
                  <u className="cursor-pointer">privacy policy</u>.
                </p>
              </div>
              <Button
                text="Get started"
                type="primary"
                redirectTo=""
                styles="h-fit w-full sm:w-auto"
              ></Button>
            </form>
          </div>
        </div>
        <div className="relative col-start-2 sm:col-start-3 xl:col-start-4 col-span-10 sm:col-span-8 xl:col-span-6 -mt-8 sm:-mt-24 p-8 bg-bg-primary rounded-xl border-2 border-border-secondary drop-shadow-xl">
          <h5 className="text-lg text-text-primary font-semibold">
            Users over time
          </h5>
          <div className="relative h-52 sm:h-60 md:h-72 xl:h-96">
            <Image
              alt="Graphic of users over time"
              src={"/static/line-and-bar-chart.jpg"}
              fill={true}
              priority={true}
              sizes="84vw, (min-width: 640px) 68vw, (min-width: 1280px) 50vw"
            ></Image>
          </div>

          <div className="absolute w-48 sm:w-52 md:w-56 lg:w-60 h-48 sm:h-52 md:h-56 lg:h-60 -right-20 -bottom-9">
            <Image
              alt="Graphic of users over time"
              src={"/static/activity-gauge.png"}
              fill={true}
              sizes="192px, (min-width: 640px) 208px, (min-width: 768px) 224px, (min-width: 1024px) 240px"
            ></Image>
          </div>
        </div>
      </header>
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
          <div className="flex flex-col justify-center col-span-12 lg:col-span-7 mt-10 mb-12 lg:mt-0 lg:mb-0 px-6 lg:px-16">
            <h3 className="text-3xl sm:text-4xl text-text-brand-primary font-semibold">
              Give us a Shot
            </h3>
            <p className="mt-4 lg:mt-8 mb-8 lg:mb-12 text-lg sm:text-xl text-text-brand-tertiary">
              Join over 4,000+ startups already growing with Untitled.
            </p>
            <div className="sm:flex space-x-0 space-y-3 sm:space-x-3 sm:space-y-0">
              <Button
                text="Learn More"
                type="secondary"
                styles="w-full sm:w-auto"
                redirectTo=""
              />
              <Button
                text="Get started"
                type="primary"
                styles="w-full sm:w-auto"
                redirectTo=""
              />
            </div>
          </div>
          <div className="relative h-72 sm:h-96 lg:h-100 col-span-12 lg:col-span-5 rounded-b-2xl lg:rounded-r-2xl">
            <Image
              alt="Give us a shoot image"
              src={"/static/give-us-a-shoot.jpg"}
              fill={true}
              sizes="85vw, (min-width: 1024px) 35vw"
              className="object-cover rounded-b-2xl lg:rounded-r-2xl"
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
