import { AccordionElement } from "@/models/AccordionModel";
import AccordionItem from "./AccordionItem";

export default function Accordion({
  items,
}: {
  items: Array<AccordionElement>;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.title}>
          {index == 0 ? <></> : <hr className="my-8 border-border-secondary" />}
          <AccordionItem title={item.title} description={item.description} />
        </li>
      ))}{" "}
    </ul>
  );
}
