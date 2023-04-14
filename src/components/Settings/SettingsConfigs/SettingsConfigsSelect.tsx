import { ChangeEventSelectOrInput, ComponentPc } from "@/data/types";

import { useSettingsConfigsContext } from "./SettingsConfigsContext";

interface ISettingsConfigsSelect {
  pcConfigIndex: string;
  pcPart: string;
  pcComponent: ComponentPc;
  handleChangeConfs: (pcConfigIndex: string, pcPart: string, e: ChangeEventSelectOrInput) => void;
}

function SettingsConfigsSelect({ pcConfigIndex, pcPart, pcComponent, handleChangeConfs }: ISettingsConfigsSelect) {
  const { componentsPc } = useSettingsConfigsContext();

  return (
    <label>
      {pcPart}:
      <select
        className="my-auto ml-1 w-24 rounded-md border-2 border-slate-700 text-sm"
        value={pcComponent.name}
        onChange={(e) => handleChangeConfs(pcConfigIndex, pcPart, e)}
      >
        {Object.values(componentsPc[pcPart]).map((component) => (
          <option key={component.name} value={component.name}>
            {component.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SettingsConfigsSelect;
