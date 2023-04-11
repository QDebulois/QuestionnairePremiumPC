import { FormAnswers, FormSettings } from "@/data/types";
import { useCallback, useState } from "react";
import FormInput from "./FormInput";
import { Updater } from "use-immer";

interface IFormProps {
  formSettings: FormSettings;
  formAnswers: FormAnswers;
}

function FormBody({ formSettings, formAnswers }: IFormProps) {
  const [openedHint, setOpenedHint] = useState<string | null>(null);

  const handleOnClickHint = useCallback(
    (formKey: string) => {
      setOpenedHint(openedHint === formKey ? null : formKey);
    },
    [openedHint]
  );

  return (
    <>
      {Object.keys(formSettings).map((formKey) => {
        return (
          <FormInput
            key={formKey}
            formQuestion={formSettings[formKey]}
            showHint={openedHint === formKey}
            handleOnClickHint={handleOnClickHint}
            answer={formAnswers[formKey]}
          />
        );
      })}
    </>
  );
}

export default FormBody;
