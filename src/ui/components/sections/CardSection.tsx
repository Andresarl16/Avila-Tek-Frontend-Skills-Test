import { CardSection } from "@/models/CardModel";
import Card from "../Card";
import SectionBadge from "../badges/SectionBadge";
import dynamic from "next/dynamic";
const ScrollRevealContainer = dynamic(
  () => import("../ScrollRevealContainer"),
  {
    ssr: false,
  }
);

export default function CardSection({
  id,
  badge,
  title,
  description,
  cards,
  iconSizes,
  openModal,
}: CardSection & { openModal: (title: string, text: string) => void }) {
  return (
    <section
      id={id}
      className="grid col-span-12 grid-cols-12 mb-16 md:mb-20 lg:mb-24 px-4 md:px-0"
    >
      <ScrollRevealContainer
        id={`badge-${badge.replace(" ", "-")}`}
        distance="0px"
        delay={100}
        className="grid col-span-12 justify-center items-center"
      >
        <SectionBadge text={badge} />
      </ScrollRevealContainer>
      <ScrollRevealContainer
        id={`${badge.replace(" ", "-")}-card-section-title`}
        distance="35px"
        className="grid col-span-12 grid-cols-12"
      >
        <h3 className="grid col-span-12 mt-4 mb-4 lg:mb-5 px-0 md:px-4 text-3xl sm:text-4xl text-center font-semibold text-text-primary">
          {title}
        </h3>
        <p className="grid md:col-start-3 lg:col-start-4 col-span-12 md:col-span-8 lg:col-span-6 mb-12 md:mb-14 lg:mb-16 text-lg sm:text-xl text-center text-text-tertiary">
          {description}
        </p>
      </ScrollRevealContainer>
      <div className="grid col-start-2 col-span-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 sm:gap-y-12 lg:gap-y-16">
        {cards.map((card, index) => (
          <ScrollRevealContainer
            key={card.title}
            id={`${badge.replace(" ", "-")}-section-card-${index}`}
            distance="0px"
            delay={300}
          >
            <Card
              card={card}
              iconSize={iconSizes}
              onClick={() => openModal(card.title, card.description)}
            ></Card>
          </ScrollRevealContainer>
        ))}
      </div>
    </section>
  );
}
