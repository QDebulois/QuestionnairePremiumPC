import { ComponentPc } from "@/data/types";
import { ChangeEventSelectOrInput } from "@/data/types";
import SettingsConfigsInput from "./SettingsConfigsInput";
import SettingsConfigsSelect from "./SettingsConfigsSelect";
import { useSettingsConfigsContext } from "./SettingsConfigsContext";
import { useCallback } from "react";

interface ISettingsConfigsPart {
  pcConfigIndex: string;
  pcPart: string;
  pcComponent: string | ComponentPc;
}

function SettingsConfigsPart({ pcConfigIndex, pcPart, pcComponent }: ISettingsConfigsPart) {
  const { componentsPc, configsPc, setConfigsPc } = useSettingsConfigsContext();

  const handleChangeConfs = useCallback(
    (pcConfigIndex: string, pcPart: string, e: ChangeEventSelectOrInput) => {
      setConfigsPc(
        configsPc.map((config, index) => {
          if (index === Number(pcConfigIndex)) {
            if (typeof config[pcPart] === "string") {
              config[pcPart] = e.target.value;
            } else {
              config[pcPart] =
                componentsPc[pcPart].find((comp) => comp.name === e.target.value) || componentsPc[pcPart][0];
            }
            return config;
          }
          return config;
        })
      );
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
}

export default SettingsConfigsPart;
