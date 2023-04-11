import { FormAnswers } from "@/data/types";
import { createContext, useContext } from "react";
import { Updater } from "use-immer";

export const SetFormAnswersContext = createContext<Updater<FormAnswers> | null>(null);
export function useSetFormAnswersContext() {
  const context = useContext(SetFormAnswersContext);
  if (!context) {
    throw new Error("Impossible d'utilise le contexte de 'Set Form Answers' en dehors de celui-ci.");
  }
  return context;
}