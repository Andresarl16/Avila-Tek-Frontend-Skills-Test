import dynamic from "next/dynamic";
import Button from "../Button";
import Picture from "../Picture";
const ScrollRevealContainer = dynamic(
  () => import("../ScrollRevealContainer"),
  {
    ssr: false,
  }
);

export default function FreeTrial({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="grid col-span-12 grid-cols-12 bg-bg-secondary py-16 lg:py-24"
    >
      <div className="grid col-start-2 col-span-10 grid-cols-12">
        <ScrollRevealContainer
          id="free-trial-text"
          origin="left"
          distance="75px"
          className="flex flex-col col-span-12 lg:col-span-7 justify-center"
        >
          <h2 className="text-3xl sm:text-4xl xl:text-5xl text-text-primary font-semibold">
            No long-term contracts. <br /> No catches.
          </h2>
          <p className="text-lg sm:text-xl mt-4 lg:mt-6 mb-8 lg:mb-12 text-text-tertiary">
            Start your 30-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row mb-16 sm:mb-6 lg:mb-0 space-x-0 space-y-3 sm:space-x-3 sm:space-y-0">
            <Button
              text="Learn more"
              type="secondary"
              actionType="internal-redirect"
              redirectTo="#faq"
              className="w-full sm:w-auto border-2 border-border-button-secondary"
            />
            <Button
              text="Get started"
              type="primary"
              actionType="internal-redirect"
              redirectTo="/login"
              className="w-full sm:w-auto"
            />
          </div>
        </ScrollRevealContainer>
        <ScrollRevealContainer
          id="free-trial-gallery"
          origin="right"
          distance="75px"
          delay={600}
          className="col-span-12 lg:col-span-5 space-y-2 xs:space-y-4 lg:space-y-5"
        >
          <div className="flex flex-col sm:flex-row justify-center items-end space-x-0 sm:space-x-5 space-y-2 xs:space-y-4 sm:space-y-0">
            <Picture
              pictures={[
                {
                  src: "/static/free-trial-mobile-image-1.png",
                  breakpoints: "block sm:hidden",
                },
                {
                  src: "/static/free-trial-desktop-image-1.png",
                  breakpoints: "hidden sm:block",
                },
              ]}
              alt="Free Trial Image 1"
              className="relative w-full sm:w-40 h-40 xs:h-60 sm:h-40"
            />
            <Picture
              pictures={[
                {
                  src: "/static/free-trial-mobile-image-2.png",
                  breakpoints: "block sm:hidden",
                },
                {
                  src: "/static/free-trial-desktop-image-2.png",
                  breakpoints: "hidden sm:block",
                },
              ]}
              alt="Free Trial Image 2"
              className="relative w-full sm:w-40 h-40 xs:h-60 sm:h-60"
            />
          </div>
          <div className="flex justify-center flex-col sm:flex-row items-start space-x-0 sm:space-x-5  space-y-2 xs:space-y-4 sm:space-y-0">
            <Picture
              pictures={[
                {
                  src: "/static/free-trial-mobile-image-5.png",
                  breakpoints: "block sm:hidden",
                },
                {
                  src: "/static/free-trial-desktop-image-5.png",
                  breakpoints: "hidden sm:block",
                },
              ]}
              alt="Free Trial Image 5"
              className="relative w-full sm:w-48 h-40 xs:h-60 sm:h-32"
            />
            <Picture
              pictures={[
                {
                  src: "/static/free-trial-mobile-image-3.png",
                  breakpoints: "block sm:hidden",
                },
                {
                  src: "/static/free-trial-desktop-image-3.png",
                  breakpoints: "hidden sm:block",
                },
              ]}
              alt="Free Trial Image 3"
              className="relative w-full sm:w-40 h-40 xs:h-60 sm:h-60"
            />
            <Picture
              pictures={[
                {
                  src: "/static/free-trial-mobile-image-4.png",
                  breakpoints: "block sm:hidden",
                },
                {
                  src: "/static/free-trial-desktop-image-4.png",
                  breakpoints: "hidden sm:block",
                },
              ]}
              alt="Free Trial Image 4"
              className="relative w-full sm:w-48 h-40 xs:h-60 sm:h-32"
            />
          </div>
        </ScrollRevealContainer>
      </div>
    </section>
  );
}
