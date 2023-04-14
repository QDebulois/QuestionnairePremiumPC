import { FormChoices, isFormQuestionSelect } from "@/data/types";
import { memo } from "react";

import { useSettingsFormContext } from "./SettingsFormContext";

interface ISettingsFormChoices {
  formKey: string;
  choice: FormChoices;
}

const SettingsFormChoices = memo(({ formKey, choice }: ISettingsFormChoices) => {
  const { formSettings, setFormSettings } = useSettingsFormContext();

  const handleChangecomps = (
    formKey: string,
    choiceId: string,
    choiceKey: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formQuestion = { ...formSettings[formKey] };
    if (isFormQuestionSelect(formQuestion)) {
      formQuestion.choices = formQuestion.choices.map((choice) => {
        if (choice.id === choiceId) {
          const value = Number(e.target.value);
          choice[choiceKey] = isNaN(value) ? 0 : value;
          return choice;
        }
        return choice;
      });
      setFormSettings({
        ...formSettings,
        [formKey]: formQuestion,
      });
    }
  };

  return (
    <li>
      <div className="float-right mt-1 text-sm">
        {choice.id} -
        {Object.keys(choice)
          .filter((choiceKey) => choiceKey !== "id")
          .map((choiceKey) => (
            <label key={choice.id + "_" + choiceKey}>
              {choiceKey.slice(5)}:
              <input
                className="mx-1 w-10 rounded-lg border-2 border-sky-800 text-center text-sm"
                value={choice[choiceKey]}
                onChange={(e) => handleChangecomps(formKey, choice.id, choiceKey, e)}
              />
            </label>
          ))}
      </div>
    </li>
  );
});

SettingsFormChoices.displayName = "SettingsFormChoices";

export default SettingsFormChoices;
