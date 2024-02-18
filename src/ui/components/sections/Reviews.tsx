import StarIcon from "@/ui/icons/StarIcon";
import Button from "../Button";
import Image from "next/image";

export default function Reviews() {
  return (
    <section className="grid col-span-12 grid-cols-12">
      <div className="grid col-start-2 col-span-10 grid-cols-12 bg-bg-brand-section my-24 rounded-l-3xl rounded-r-2xl">
        <div className="relative col-span-5 h-112 rounded-l-2xl">
          <Image
            alt="Reviewer Picture"
            src={"/static/review.png"}
            fill={true}
            sizes="85vw, (min-width: 1024px) 35vw"
            className="object-cover rounded-l-2xl"
          />
        </div>
        <div className="flex flex-col col-span-7 justify-center p-16">
          <ul className="flex space-x-1 mb-6">
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <StarIcon width={20} height={20}></StarIcon>
              </li>
            ))}
          </ul>
          <h2 className="text-4xl font-medium text-text-brand-primary">
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
      </div>
    </section>
  );
}
