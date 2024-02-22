import { Card, IconSizes } from "@/models/CardModel";
import Button from "./Button";
import RightArrowIcon from "../../icons/RightArrowIcon";

export default function Card({
  card,
  iconSize,
  onClick,
}: {
  card: Card;
  iconSize: IconSizes;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`flex justify-center items-center ${
          iconSize === "medium"
            ? "w-12 sm:w-14 h-12 sm:h-14"
            : "w-10 sm:w-12 h-10 sm:h-12"
        } p-1 border-2 rounded-lg border-border-secondary`}
      >
        <card.svg className="w-10 sm:w-11 h-10 sm:h-11" />
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
        actionType="function"
        onClick={onClick}
        icon={RightArrowIcon}
      ></Button>
    </div>
  );
}
