"use client";

import { AccordionElement } from "@/models/AccordionModel";
import { useState } from "react";
import MinusIcon from "../icons/MinusIcon";

export default function AccordionItem({
  title,
  description,
}: AccordionElement) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        className="flex w-full justify-between"
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
      >
        <h6 className="w-fit text-lg font-medium text-text-primary">
          {" "}
          {title}{" "}
        </h6>
        <div className="relative w-fit">
          <MinusIcon
            className={`absolute transition-all duration-300 ease-in-out ${
              accordionOpen ? "rotate-0" : "-rotate-180"
            }`}
            width={20}
            height={20}
          ></MinusIcon>
          <MinusIcon
            className={`absolute transition-all duration-300 ease-in-out ${
              accordionOpen ? "rotate-0" : "-rotate-90"
            }`}
            width={20}
            height={20}
          ></MinusIcon>
        </div>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-base text-text-tertiary mt-2">
          {" "}
          {description}{" "}
        </p>
      </div>
    </div>
  );
}
