import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { FormAnswers, FormQuestionSelect } from "@/data/types";
import { useSetFormAnswersContext } from "./FormContext";
import { memo } from "react";

interface IFormSelect {
  formQuestion: FormQuestionSelect;
  showHint: boolean;
  onClickHint: (formKey: string) => void;
  answer: string;
}

const FormSelect = memo(({ formQuestion, showHint, onClickHint, answer }: IFormSelect) => {
  const setFormAnswers = useSetFormAnswersContext();

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormAnswers((answers: FormAnswers) => {
      answers[formQuestion.id] = e.target.value;
    });
  };

  return (
    <label className="flex gap-6">
      <button type="button" onClick={() => onClickHint(formQuestion.id)}>
        <span className="m-auto flex text-xl">
          {formQuestion.label}
          <ChevronRightIcon
            className={`
              ${showHint ? "-rotate-90 border-orange-700 text-neutral-800" : "rotate-90 bg-white text-orange-700"}
              my-auto ml-2  h-6 w-6 rounded-lg border-2
              border-neutral-500 transition duration-200 ease-linear`}
          />
        </span>
      </button>
      <select
        className="my-auto ml-auto w-36 rounded-lg border-2 border-sky-800 text-center text-lg"
        onChange={(e) => handleChangeSelect(e)}
        value={answer}
      >
        {Object.values(formQuestion.choices).map((choice) => (
          <option key={choice.id} value={choice.id}>
            {choice.id}
          </option>
        ))}
      </select>
    </label>
  );
});
FormSelect.displayName = "FormSelect";

export default FormSelect;
