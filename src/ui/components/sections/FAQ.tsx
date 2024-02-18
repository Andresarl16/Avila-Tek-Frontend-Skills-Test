import { frequentlyAskedQuestions } from "@/constants/FAQAccordion";
import Accordion from "../Accordion";

export default function FAQ() {
  return (
    <section className="grid col-start-4 col-span-6 py-24">
      <h3 className="text-4xl text-center font-semibold text-text-primary">
        Frequently asked questions
      </h3>
      <p className="mt-5 mb-16 text-xl text-center text-text-tertiary">
        Everything you need to know about the product and billing.
      </p>
      <Accordion items={frequentlyAskedQuestions}></Accordion>
    </section>
  );
}
