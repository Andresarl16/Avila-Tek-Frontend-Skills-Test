import { frequentlyAskedQuestions } from "@/constants/FAQAccordion";
import Accordion from "../Accordion";
import dynamic from "next/dynamic";
const ScrollRevealContainer = dynamic(
  () => import("../ScrollRevealContainer"),
  {
    ssr: false,
  }
);

export default function FAQ({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="grid sm:col-start-2 lg:col-start-3 xl:col-start-4 col-span-12 sm:col-span-10 lg:col-span-8 xl:col-span-6 pt-6 sm:pt-12 md:pt-24 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-0"
    >
      <ScrollRevealContainer id="faq-section-title" distance="35px">
        <h3 className="text-3xl md:text-4xl text-center font-semibold text-text-primary">
          Frequently asked questions
        </h3>
        <p className="mt-4 md:mt-5 mb-12 sm:mb-14 md:mb-16 text-lg md:text-xl text-center text-text-tertiary">
          Everything you need to know about the product and billing.
        </p>
      </ScrollRevealContainer>
      <Accordion items={frequentlyAskedQuestions}></Accordion>
    </section>
  );
}
