import { ReactNode, memo } from "react";
import { Transition } from "@headlessui/react";
import { CardConfingPc } from "@/data/types";
import CardInfos from "./CardInfos";
import CardContext from "./CardContext";
import CardImage from "./CardImage";
import CardScore from "./CardScore";
import CardButton from "./CardButton";
import CardBody from "./CardBody";

interface ICardProps {
  cardConfigPc: CardConfingPc;
  image: ReactNode;
  body: ReactNode;
}

export const Card = memo(({ cardConfigPc, image, body }: ICardProps) => {
  return (
    <section className="flex flex-col justify-center">
      <CardContext.Provider value={cardConfigPc}>
        <Transition
          key={cardConfigPc.configPc.id} // Oblige REACT a rerender car nouvel élément
          show={true}
          appear={true}
          enter="transform transition duration-700 ease-out"
          enterFrom="opacity-0 -translate-x-5"
          enterTo="opacity-100 translate-x-0"
          className="flex max-w-xs flex-col justify-center rounded-lg border-4
        border-orange-500 bg-white shadow-lg shadow-black"
        >
          {image}
          {body}
        </Transition>
      </CardContext.Provider>
    </section>
  );
});
Card.displayName = "Card";

export const CardParts = () => {};
CardParts.Image = CardImage;
CardParts.Body = CardBody;
CardParts.Score = CardScore;
CardParts.Infos = CardInfos;
CardParts.Button = CardButton;
