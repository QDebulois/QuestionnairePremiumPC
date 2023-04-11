import { ConfigPc } from "@/data/types";
import SettingsConfigsPart from "./SettingsConfigsPart";

interface ISettingsConfigsConfig {
  pcConfigIndex: string;
  pcConfig: ConfigPc;
}

function SettingsConfigsConfig({ pcConfigIndex, pcConfig }: ISettingsConfigsConfig) {
  return (
    <li className="mx-auto mt-1">
      <ul className="flex flex-row flex-wrap gap-2">
        {Object.entries(pcConfig).map(([pcPart, pcComponent]) => {
          if (pcPart !== "id")
            return (
              <SettingsConfigsPart
                key={pcConfigIndex + "_" + pcPart}
                pcConfigIndex={pcConfigIndex}
                pcPart={pcPart}
                pcComponent={pcComponent}
              />
            );
        })}
      </ul>
    </li>
  );
}

export default SettingsConfigsConfig;
