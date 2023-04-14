import { ComponentCategories, ConfigPc } from "@/data/types";
import { Dispatch, memo } from "react";

import SettingsConfigsConfig from "./SettingsConfigsConfig";
import { SettingsConfigsContext } from "./SettingsConfigsContext";

interface IRenderConfigs {
  componentsPc: ComponentCategories;
  configsPc: ConfigPc[];
  setConfigsPc: Dispatch<ConfigPc[]>;
}

const SettingsConfigs = memo(({ componentsPc, configsPc, setConfigsPc }: IRenderConfigs) => {
  const contextValues = {
    componentsPc,
    configsPc,
    setConfigsPc,
  };

  return (
    <section>
      <SettingsConfigsContext.Provider value={contextValues}>
        <h2 className="m-4 border-b-2 border-slate-700 text-center text-2xl font-bold text-orange-700">
          Configurations PC
        </h2>
        <ul className="flex flex-col">
          {Object.entries(configsPc)
            .sort((a, b) => Number(a[1].id) - Number(b[1].id))
            .map(([pcConfigIndex, pcConfig]) => (
              <SettingsConfigsConfig key={pcConfigIndex} pcConfigIndex={pcConfigIndex} pcConfig={pcConfig} />
            ))}
        </ul>
      </SettingsConfigsContext.Provider>
    </section>
  );
});

SettingsConfigs.displayName = "SettingsConfigs";

export default SettingsConfigs;
