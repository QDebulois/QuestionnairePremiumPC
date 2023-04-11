import { FormSettings } from "@/data/types";
import { createContext, useContext, Dispatch } from "react";

type SettingsFormContextType = {
  formSettings: FormSettings;
  setFormSettings: Dispatch<FormSettings>;
};

export const SettingsFormContext = createContext<SettingsFormContextType | null>(null);
export function useSettingsFormContext() {
  const context = useContext(SettingsFormContext);
  if (!context) {
    throw new Error("Impossible d'utilise le contexte de 'SettingsFormContext' en dehors de celui-ci.");
  }
  return context;
}
