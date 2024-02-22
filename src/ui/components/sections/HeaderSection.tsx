import Button from "../Button";
import Image from "next/image";
import Input from "@/ui/components/Input";
import dynamic from "next/dynamic";
const ScrollRevealContainer = dynamic(
  () => import("../ScrollRevealContainer"),
  {
    ssr: false,
  }
);

export default function HeaderSection({
  id,
  openModal,
}: {
  id: string;
  openModal: (title: string, text: string) => void;
}) {
  return (
    <header
      id={id}
      className="grid col-span-12 grid-cols-12 pt-0 sm:pt-24 mb-24 sm:mb-28 lg:mb-32"
    >
      <ScrollRevealContainer
        id="header-card"
        origin="left"
        distance="150px"
        className="grid sm:col-start-2 col-span-12 sm:col-span-10 grid-cols-12 px-4 md:px-0 pt-16 sm:pt-0 bg-bg-brand-section sm:rounded-2xl"
      >
        <div className="flex flex-col items-center sm:col-start-3 col-span-12 sm:col-span-8 pt-16 sm:pt-24 pb-24 sm:pb-48">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text-brand-primary text-center font-semibold">
            Grow your users. <br />
            <span className="text-text-brand-secondary">Smarter.</span>
          </h1>
          <p className="mt-4 sm:mt-5 lg:mt-6 mb-10 sm:mb-11 lg:mb-12 font-lg sm:font-xl text-text-brand-tertiary text-center">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <form
            action=""
            className="w-full md:w-3/4 lg:w-full lg:flex justify-center lg:space-x-4"
          >
            <div className="w-auto">
              <Input
                placeholder="Enter your email"
                tooltip="Enter your email"
                className="w-full lg:max-w-96"
              ></Input>
              <p className="mb-4 lg:mb-0 text-sm text-text-brand-tertiary">
                We care about your data in our{" "}
                <u
                  className="cursor-pointer"
                  onClick={() =>
                    openModal(
                      "Privacy Policy",
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in. At risus viverra adipiscing at in tellus integer. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Mattis rhoncus urna neque viverra justo nec ultrices. Consectetur purus ut faucibus pulvinar elementum. Placerat in egestas erat imperdiet sed. Ridiculus mus mauris vitae ultricies leo integer malesuada. Dolor magna eget est lorem ipsum. Eu mi bibendum neque egestas congue quisque egestas diam in. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Volutpat est velit egestas dui id ornare arcu odio ut. Ut ornare lectus sit amet est placerat in. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Laoreet non curabitur gravida arcu ac tortor dignissim. Vel turpis nunc eget lorem dolor sed viverra ipsum. Nec feugiat in fermentum posuere urna nec tincidunt. Etiam sit amet nisl purus in. Netus et malesuada fames ac turpis egestas sed tempus. Amet mattis vulputate enim nulla."
                    )
                  }
                >
                  privacy policy
                </u>
                .
              </p>
            </div>
            <Button
              text="Get started"
              type="primary"
              actionType="function"
              onClick={() => {}}
              className="h-fit w-full lg:w-auto"
            ></Button>
          </form>
        </div>
      </ScrollRevealContainer>
      <div className="relative col-start-2 sm:col-start-3 xl:col-start-4 col-span-10 sm:col-span-8 xl:col-span-6 -mt-8 sm:-mt-24">
        <ScrollRevealContainer
          id="line-chart"
          delay={300}
          className="p-8 bg-bg-primary rounded-xl border-2 border-border-secondary drop-shadow-xl"
        >
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
        </ScrollRevealContainer>

        <ScrollRevealContainer
          id="activity-gauge"
          origin="right"
          delay={400}
          className="absolute w-48 sm:w-52 md:w-56 lg:w-60 h-48 sm:h-52 md:h-56 lg:h-60 -right-20 -bottom-9"
        >
          <Image
            alt="Graphic of users over time"
            src={"/static/activity-gauge.png"}
            fill={true}
            sizes="192px, (min-width: 640px) 208px, (min-width: 768px) 224px, (min-width: 1024px) 240px"
          ></Image>
        </ScrollRevealContainer>
      </div>
    </header>
  );
}
