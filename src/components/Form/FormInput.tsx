import {
  isFormQuestionSelect,
  FormQuestionSelect,
  FormQuestionSwitch,
  isFormQuestionSwitch,
} from "@/data/types";
import FormSelect from "./FormSelect";
import FormSwitch from "./FormSwitch";
import FormHint from "./FormHint";

interface IFormInput {
  formQuestion: FormQuestionSelect | FormQuestionSwitch;
  showHint: boolean;
  handleOnClickHint: (formKey: string) => void;
  answer: string | boolean;
}

function FormInput({ formQuestion, showHint, handleOnClickHint, answer }: IFormInput) {
  let formInputType;
  if (isFormQuestionSelect(formQuestion) && typeof answer === "string") {
    formInputType = (
      <FormSelect formQuestion={formQuestion} showHint={showHint} onClickHint={handleOnClickHint} answer={answer} />
    );
  } else if (isFormQuestionSwitch(formQuestion) && typeof answer === "boolean") {
    formInputType = (
      <FormSwitch formQuestion={formQuestion} showHint={showHint} onClickHint={handleOnClickHint} answer={answer} />
    );
  } else {
    formInputType = <>Error, bad input</>;
  }

  return (
    <div>
      {formInputType}
      <FormHint showHint={showHint}>{formQuestion.description}</FormHint>
    </div>
  );
}

export default FormInput;
