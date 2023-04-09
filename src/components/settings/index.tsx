import { ConfigPc, FormSettings, ComponentCategories } from "@/data/types";
import renderSectionConfigs from "./sectionConfigs";
import renderSectionComponents from "./sectionComponents";
import renderSectionForms from "./sectionForm";

interface ISettingProps {
  formSettings: FormSettings;
  setFormSettings: (formSettings: FormSettings) => void;
  componentsPc: ComponentCategories;
  setComponentsPc: (componentsPc: ComponentCategories) => void;
  configsPc: ConfigPc[];
  setConfigsPc: (configsPc: ConfigPc[]) => void;
}

function Settings({
  formSettings,
  setFormSettings,
  componentsPc,
  setComponentsPc,
  configsPc,
  setConfigsPc,
}: ISettingProps) {
  return (
    <section className="flex justify-around">
      <div
        className="
          mx-6 flex flex-col justify-around gap-2 rounded-lg border-4 border-orange-500
          bg-white p-8 text-center shadow-2xl shadow-black"
      >
        {renderSectionForms({ formSettings, setFormSettings })}
        {renderSectionComponents({ componentsPc, setComponentsPc })}
        {renderSectionConfigs({ componentsPc, configsPc, setConfigsPc })}
      </div>
    </section>
  );
}

export default Settings;
