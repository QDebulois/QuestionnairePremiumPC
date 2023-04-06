import { ReactNode } from "react";
import { Transition } from "@headlessui/react";
import { CardConfingPc, ConfigPc } from "@/data/data";
import CardInfos from "./CardInfos";
import CardContext from "./CardContext";
import CardImage from "./cardImage";
import CardScore from "./CardScore";
import CardButton from "./CardButton";
import CardBody from "./CardBody";

interface ICardProps {
  cardConfigPc: CardConfingPc;
  image: ReactNode;
  body: ReactNode;
}

function Card({ cardConfigPc, image, body }: ICardProps) {
  return (
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
  );
}

Card.CardImage = CardImage;
Card.CardBody = CardBody;
Card.CardScore = CardScore;
Card.CardInfos = CardInfos;
Card.CardButton = CardButton;

export default Card;
