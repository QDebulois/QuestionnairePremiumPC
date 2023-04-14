import { CardConfingPc } from "@/data/types";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { memo, ReactNode } from "react";

import CardBody from "./CardBody";
import CardButton from "./CardButton";
import CardContext from "./CardContext";
import CardImage from "./CardImage";
import CardInfos from "./CardInfos";
import CardScore from "./CardScore";

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
          <Link
            href={cardConfigPc.configPc.photoUrl}
            title={`Voir ${cardConfigPc.configPc.name} en detail.`}
            target="_blank"
          >
            {image}
          </Link>
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
