import { ComponentCategories, ConfigPc } from "@/data/types";
import { createContext, Dispatch, useContext } from "react";

type SettingsConfigsContextType = {
  componentsPc: ComponentCategories;
  configsPc: ConfigPc[];
  setConfigsPc: Dispatch<ConfigPc[]>;
};

export const SettingsConfigsContext = createContext<SettingsConfigsContextType | null>(null);
export function useSettingsConfigsContext() {
  const context = useContext(SettingsConfigsContext);
  if (!context) {
    throw new Error("Impossible d'utilise le contexte de 'SettingsConfigsContext' en dehors de celui-ci.");
  }
  return context;
}
