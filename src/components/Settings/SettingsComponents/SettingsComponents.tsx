import { ComponentCategories } from "@/data/types";
import { Dispatch, memo } from "react";
import { SettingsComponentsContext } from "./SettingsComponentsContext";
import SettingsComponentsCategories from "./SettingsComponentsCategories";

interface IRenderComponents {
  componentsPc: ComponentCategories;
  setComponentsPc: Dispatch<ComponentCategories>;
}

const SettingsComponents = memo(({ componentsPc, setComponentsPc }: IRenderComponents) => {

  const contextValues = {
    componentsPc,
    setComponentsPc
  }

  return (
    <section>
      <SettingsComponentsContext.Provider value={contextValues}>
      <h2 className="m-4 border-b-2 border-slate-700 text-center text-2xl font-bold text-orange-700">
        Configurations Composants
      </h2>
      <div className="m-auto flex w-3/4 flex-row flex-wrap justify-center gap-6">
        {Object.keys(componentsPc).map((category) => (
          <SettingsComponentsCategories key={category} category={category} />
        ))}
      </div>
      </SettingsComponentsContext.Provider>
    </section>
  );
});

SettingsComponents.displayName = "SettingsComponents";

export default SettingsComponents;
