import { ComponentCategories } from "@/data/types";
import { createContext, Dispatch, useContext } from "react";

type SettingsComponentsContextType = {
  componentsPc: ComponentCategories;
  setComponentsPc: Dispatch<ComponentCategories>;
};

export const SettingsComponentsContext = createContext<SettingsComponentsContextType | null>(null);
export function useSettingsComponentsContext() {
  const context = useContext(SettingsComponentsContext);
  if (!context) {
    throw new Error("Impossible d'utilise le contexte de 'SettingsComponentsContext' en dehors de celui-ci.");
  }
  return context;
}
