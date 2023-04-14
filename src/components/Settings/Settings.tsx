import { ReactNode } from "react";

import SettingsComponents from "./SettingsComponents/SettingsComponents";
import SettingsConfigs from "./SettingsConfigs/SettingsConfigs";
import SettingsForm from "./SettingsForm/SettingsForm";

interface ISettingProps {
  body: ReactNode;
}

function Settings({ body }: ISettingProps) {
  return (
    <section className="flex justify-around">
      <div
        className="mx-6 flex flex-col justify-around gap-2 rounded-lg border-4
          border-orange-500 bg-white p-8 text-center shadow-2xl shadow-black"
      >
        {body}
      </div>
    </section>
  );
}

Settings.Form = SettingsForm;
Settings.Components = SettingsComponents;
Settings.Configs = SettingsConfigs;

export default Settings;
