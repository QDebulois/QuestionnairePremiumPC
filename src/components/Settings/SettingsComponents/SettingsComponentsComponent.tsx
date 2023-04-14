import { ComponentPc } from "@/data/types";
import { memo } from "react";

import { useSettingsComponentsContext } from "./SettingsComponentsContext";

interface ISettingsComponentsComponent {
  component: ComponentPc;
  category: string;
}

const SettingsComponentsComponent = memo(({ component, category }: ISettingsComponentsComponent) => {
  const { componentsPc, setComponentsPc } = useSettingsComponentsContext();

  const handleChangePcComponent = (
    targCompCat: string,
    targetedCompName: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setComponentsPc({
      ...componentsPc,
      [targCompCat]: componentsPc[targCompCat].map((component) => {
        if (component.name === targetedCompName) {
          const value = Number(e.target.value);
          component.score = isNaN(value) ? 0 : value;
          return component;
        }
        return component;
      }),
    });
  };

  return (
    <li>
      <label className="float-right mt-1 text-sm">
        {component.name} - Score:
        <input
          className="ml-1 w-10 rounded-lg border-2 border-sky-800 text-center text-sm"
          value={component.score}
          onChange={(event) => handleChangePcComponent(category, component.name, event)}
        />
      </label>
    </li>
  );
});

SettingsComponentsComponent.displayName = "SettingsComponentsComponent";

export default SettingsComponentsComponent;
