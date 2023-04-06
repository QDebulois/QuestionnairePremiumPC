import { CardConfingPc } from "@/data/data";
import { createContext, useContext } from "react";

const CardContext = createContext<CardConfingPc | null>(null);

export function useCardContext() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error(
      "Impossible d'utilise le contexte de 'Card' en dehors de celui-ci."
    );
  }

  return context;
}

export default CardContext