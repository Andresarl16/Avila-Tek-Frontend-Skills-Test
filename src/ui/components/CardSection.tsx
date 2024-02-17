import { CardSection } from "@/models/CardModel";
import Badge from "./Badge";
import Card from "./Card";

export default function CardSection({
  badge,
  title,
  description,
  cards,
}: CardSection) {
  return (
    <section className="grid grid-cols-12 mb-24">
      <div className="grid col-span-12 justify-center items-center">
        <Badge text={badge} />
      </div>
      <h3 className="grid col-start-3 col-span-8 mt-4 text-4xl text-center font-semibold text-text-primary">
        {title}
      </h3>
      <p className="grid col-start-3 col-span-8 mt-5 mb-16 text-xl text-center text-text-tertiary">
        {description}
      </p>
      <div className="grid col-start-2 col-span-10 grid-cols-3 gap-x-10 gap-y-16">
        {cards.map((card) => (
          <Card key={card.title} card={card}></Card>
        ))}
      </div>
    </section>
  );
}
