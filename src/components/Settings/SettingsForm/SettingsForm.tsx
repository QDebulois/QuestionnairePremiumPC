import { FormSettings, isFormQuestionSelect } from "@/data/types";
import { Dispatch, memo } from "react";

import { SettingsFormContext } from "./SettingsFormContext";
import SettingsFormQuestion from "./SettingsFormQuestion";

interface IRenderComponents {
  formSettings: FormSettings;
  setFormSettings: Dispatch<FormSettings>;
}

const SettingsForm = memo(({ formSettings, setFormSettings }: IRenderComponents) => {
  const contextValues = {
    formSettings,
    setFormSettings,
  };

  return (
    <section>
      <SettingsFormContext.Provider value={contextValues}>
        <h2 className="m-4 border-b-2 border-slate-700 text-center text-2xl font-bold text-orange-700">
          Configuration du formulaire
        </h2>
        <div className="m-auto flex w-3/4 flex-row flex-wrap justify-center gap-6">
          {Object.keys(formSettings)
            .filter((formKey) => isFormQuestionSelect(formSettings[formKey]))
            .map((formKey) => (
              <SettingsFormQuestion key={formKey} formKey={formKey} />
            ))}
        </div>
      </SettingsFormContext.Provider>
    </section>
  );
});

SettingsForm.displayName = "SettingsForm";

export default SettingsForm;
