import { ChangeEventSelectOrInput, ComponentPc, ConfigPc } from "@/data/types";
import { memo, useCallback } from "react";

import { useSettingsConfigsContext } from "./SettingsConfigsContext";
import SettingsConfigsInput from "./SettingsConfigsInput";
import SettingsConfigsSelect from "./SettingsConfigsSelect";

interface ISettingsConfigsPart {
  pcConfigIndex: string;
  pcPart: string;
  pcComponent: string | ComponentPc;
}

const SettingsConfigsPart = memo(({ pcConfigIndex, pcPart, pcComponent }: ISettingsConfigsPart) => {
  const { componentsPc, configsPc, setConfigsPc } = useSettingsConfigsContext();

  const handleChangeConfs = useCallback(
    (pcConfigIndex: string, pcPart: string, e: ChangeEventSelectOrInput) => {
      const newConfigsPc: ConfigPc[] = configsPc
        .map((config, index) => {
          if (index === Number(pcConfigIndex)) {
            if (typeof config[pcPart] === "string") {
              config[pcPart] = e.target.value;
            } else {
              config[pcPart] =
                componentsPc[pcPart].find((comp) => comp.name === e.target.value) ?? componentsPc[pcPart][0];
            }
            return config;
          }
          return config;
        })
        .sort((a, b) => a.CPU.score + a.RAM.score + a.GPU.score - (b.CPU.score + b.RAM.score + b.GPU.score));

      setConfigsPc(newConfigsPc);
    },
    [componentsPc, configsPc, setConfigsPc]
  );

  return (
    <li>
      {typeof pcComponent === "string" ? (
        <SettingsConfigsInput
          pcConfigIndex={pcConfigIndex}
          pcPart={pcPart}
          pcComponent={pcComponent}
          handleChangeConfs={handleChangeConfs}
        />
      ) : (
        <SettingsConfigsSelect
          pcConfigIndex={pcConfigIndex}
          pcPart={pcPart}
          pcComponent={pcComponent}
          handleChangeConfs={handleChangeConfs}
        />
      )}
    </li>
  );
});

SettingsConfigsPart.displayName = "SettingsConfigsPart";

export default SettingsConfigsPart;
