import Button from "../Button";
import Image from "next/image";
import Input from "@/ui/components/Input";

export default function Header() {
  return (
    <header className="grid col-span-12 grid-cols-12 mt-0 sm:mt-24 mb-24 sm:mb-28 lg:mb-32">
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
              <Input
                placeholder="Enter your email"
                tooltip="Enter your email"
              ></Input>
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
  );
}
