import Image from "next/image";
import { useCardContext } from "./CardContext";

function CardImage() {
  const cardConfigPc = useCardContext();

  return (
    <a href="#" title={`Voir ${cardConfigPc.configPc.nom} en detail`}>
      <Image
        src={cardConfigPc.configPc.photoUrl}
        width="0"
        height="0"
        sizes="100vw"
        className="
          h-48 w-full rounded-t-md border-b-2 border-neutral-400
        bg-sky-900 bg-opacity-70 py-2 px-16"
        alt=""
      />
    </a>
  );
}

export default CardImage;
