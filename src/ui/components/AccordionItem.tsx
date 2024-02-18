"use client";

import { AccordionElement } from "@/models/AccordionModel";
import { useState } from "react";

export default function AccordionItem({
  title,
  description,
}: AccordionElement) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(true);

  return (
    <div>
      <button
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
      >
        <h6 className="text-lg font-medium text-text-primary"> {title} </h6>
      </button>

      <p
        className={`text-base text-text-tertiary mt-2 ${
          accordionOpen ? "" : "hidden"
        }`}
      >
        {" "}
        {description}{" "}
      </p>
    </div>
  );
}
