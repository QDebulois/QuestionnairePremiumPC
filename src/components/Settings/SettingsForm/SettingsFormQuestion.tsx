import { isFormChoicesArray } from "@/data/types";

import SettingsFormChoices from "./SettingsFormChoices";
import { useSettingsFormContext } from "./SettingsFormContext";

interface ISettingsFormQuestion {
  formKey: string;
}

function SettingsFormQuestion({ formKey }: ISettingsFormQuestion) {
  const { formSettings } = useSettingsFormContext();

  const formQuestionChoices = formSettings[formKey].choices;
  if (!isFormChoicesArray(formQuestionChoices)) throw new Error("Need FormChoices[] type! Avoid Switch kind!");

  return (
    <div>
      <h3 className="border-b-2 border-sky-800 text-center font-bold text-orange-700">{formKey}</h3>
      <ul>
        {Object.values(formQuestionChoices).map((choice) => (
          <SettingsFormChoices key={choice.id} formKey={formKey} choice={choice} />
        ))}
      </ul>
    </div>
  );
}

export default SettingsFormQuestion;
