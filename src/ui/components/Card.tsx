import { Card } from "@/models/CardModel";
import Button from "./Button";
import RightArrowIcon from "../icons/RightArrowIcon";

export default function Card({ card }: { card: Card }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-fit p-1 border-2 rounded-lg border-border-secondary ">
        <card.svg className="w-10 sm:w-11 h-10 sm:h-11" />
        {/* Widht a 40 en responsive */}
      </div>
      <h4 className="my-1.5 md:my-2 lg:my-2.5 text-lg sm:text-xl text-center font-semibold text-text-primary">
        {" "}
        {card.title}{" "}
      </h4>
      <p className="mb-3 md:mb-3.5 lg:mb-4 text-base text-center text-text-tertiary">
        {" "}
        {card.description}{" "}
      </p>
      <Button
        text="View integration"
        type="tertiary"
        redirectTo=""
        icon={RightArrowIcon}
      ></Button>
    </div>
  );
}
