import { AccordionElement } from "@/models/AccordionModel";
import AccordionItem from "./AccordionItem";
import ScrollRevealContainer from "./ScrollRevealContainer";

export default function Accordion({
  items,
}: {
  items: Array<AccordionElement>;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <ScrollRevealContainer
          id={`accordion-item-${index}`}
          key={item.title}
          distance="75px"
        >
          <li>
            {index == 0 ? (
              <></>
            ) : (
              <hr className="my-7 border-border-secondary" />
            )}
            <AccordionItem title={item.title} description={item.description} />
          </li>
        </ScrollRevealContainer>
      ))}{" "}
    </ul>
  );
}
