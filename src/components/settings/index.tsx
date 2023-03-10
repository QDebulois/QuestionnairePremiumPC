import {
  ConfigPc,
  FormSettings,
  ComponentPc,
  ComponentCategories,
} from "@/data/data";
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
          flex flex-col justify-around gap-2 mx-6 p-8 bg-white rounded-lg
          border-4 border-orange-500 shadow-2xl shadow-black text-center"
      >
        {renderSectionForms({ formSettings, setFormSettings })}
        {renderSectionComponents({ componentsPc, setComponentsPc })}
        {renderSectionConfigs({ componentsPc, configsPc, setConfigsPc })}
      </div>
    </section>
  );
}

export default Settings;
