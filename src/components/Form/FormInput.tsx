import { isFormQuestionSelect, FormQuestionSelect, FormQuestionSwitch } from "@/data/types";
import FormSelect from "./FormSelect";
import FormSwitch from "./FormSwitch";
import FormHint from "./FormHint";

interface IFormInput {
  formQuestion: FormQuestionSelect | FormQuestionSwitch;
  showHint: boolean;
  handleOnClickHint: (formKey: string) => void;
}

function FormInput({ formQuestion, showHint, handleOnClickHint }: IFormInput) {
  const formQuestionIsSelect = isFormQuestionSelect(formQuestion);
  const formInputType = formQuestionIsSelect ? (
    <FormSelect
      formQuestion={formQuestion}
      showHint={showHint}
      onClickHint={handleOnClickHint}
    />
  ) : (
    <FormSwitch
      formQuestion={formQuestion}
      showHint={showHint}
      onClickHint={handleOnClickHint}
    />
  );

  return (
    <div>
      {formInputType}
      <FormHint showHint={showHint}>{formQuestion.description}</FormHint>
    </div>
  );
}

export default FormInput;
