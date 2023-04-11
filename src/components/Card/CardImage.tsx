import Image from "next/image";
import { useCardContext } from "./CardContext";
import { memo } from "react";

const CardImage = memo(() => {
  const cardConfigPc = useCardContext();

  return (
    <Image
      src={cardConfigPc.configPc.photoUrl}
      width="0"
      height="0"
      sizes="100vw"
      className="h-48 w-full rounded-t-md border-b-2 border-neutral-400 bg-sky-900 bg-opacity-70 px-16 py-2"
      alt=""
    />
  );
});
CardImage.displayName = "CardImage";

export default CardImage;
