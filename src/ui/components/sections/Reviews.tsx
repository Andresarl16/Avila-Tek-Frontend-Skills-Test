import StarIcon from "@/ui/icons/StarIcon";
import Image from "next/image";
import dynamic from "next/dynamic";
const ScrollRevealContainer = dynamic(
  () => import("../ScrollRevealContainer"),
  {
    ssr: false,
  }
);

export default function Reviews() {
  return (
    <section className="grid col-span-12 grid-cols-12">
      <ScrollRevealContainer
        id="review-card"
        origin="left"
        distance="150px"
        className="grid sm:col-start-2 col-span-12 sm:col-span-10 grid-cols-12 bg-bg-brand-section my-16 sm:my-24 mx-4 sm:mx-0 rounded-t-3xl lg:rounded-l-3xl rounded-b-2xl lg:rounded-r-2xl"
      >
        <div className="relative col-span-12 lg:col-span-5 h-72 sm:h-96 md:h-112 rounded-t-2xl lg:rounded-r-none lg:rounded-l-2xl">
          <Image
            alt="Reviewer Picture"
            src={"/static/review.png"}
            fill={true}
            sizes="85vw, (min-width: 1024px) 35vw"
            className="object-cover rounded-t-2xl lg:rounded-r-none lg:rounded-l-2xl"
          />
        </div>
        <div className="flex flex-col col-span-12 lg:col-span-7 justify-center px-6 sm:px-10 md:px-14 py-10 md:py-14 lg:p-16">
          <ul className="flex space-x-1 mb-4 sm:mb-5 md:mb-6">
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <StarIcon width={20} height={20}></StarIcon>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-medium text-text-brand-primary">
            Love the simplicity of the service and the prompt customer support.
            We can’t imagine working without it.
          </h2>
          <h6 className="text-lg font-semibold text-text-brand-primary mt-8 mb-1">
            — Renee Wells
          </h6>
          <p className="text-base text-text-brand-tertiary">
            Product Designer, Quotient
          </p>
        </div>
      </ScrollRevealContainer>
    </section>
  );
}
