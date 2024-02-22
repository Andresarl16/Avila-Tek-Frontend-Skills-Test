import Button from "../Button";
import Image from "next/image";
import ScrollRevealContainer from "../ScrollRevealContainer";

export default function GiveUsAShoot() {
  return (
    <section className="grid col-span-12 grid-cols-12 mb-16 md:mb-20 lg:mb-24 ">
      <ScrollRevealContainer
        id="give-us-a-shoot"
        origin="right"
        distance="150px"
        className="grid col-start-2 col-span-10 grid-cols-12 bg-bg-brand-section rounded-t-2xl rounded-b-3xl lg:rounded-l-2xl lg:rounded-r-3xl"
      >
        <div className="flex flex-col justify-center col-span-12 lg:col-span-7 mt-10 mb-12 lg:mt-0 lg:mb-0 px-6 lg:px-16">
          <h3 className="text-3xl sm:text-4xl text-text-brand-primary font-semibold">
            Give us a Shot
          </h3>
          <p className="mt-4 lg:mt-8 mb-8 lg:mb-12 text-lg sm:text-xl text-text-brand-tertiary">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="flex flex-col sm:flex-row space-x-0 space-y-3 sm:space-x-3 sm:space-y-0">
            <Button
              text="Learn More"
              type="secondary"
              actionType="internal-redirect"
              className="w-full sm:w-auto"
              redirectTo="#faq"
            />
            <Button
              text="Get started"
              type="primary"
              actionType="internal-redirect"
              className="w-full sm:w-auto"
              redirectTo="/login"
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
      </ScrollRevealContainer>
    </section>
  );
}
