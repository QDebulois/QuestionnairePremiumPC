import { FormSettings } from "@/data/types";
import { useCallback, useState } from "react";
import FormInput from "./FormInput";

interface IFormProps {
  formSettings: FormSettings;
}

function FormBody({ formSettings }: IFormProps) {
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
          />
        );
      })}
    </>
  );
}

export default FormBody;
