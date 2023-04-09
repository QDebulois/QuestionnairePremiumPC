import { FormAnswers, FormQuestionSwitch } from "@/data/types";
import { Switch } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useFormAnswersContext, useSetFormAnswersContext } from "./FormContext";

interface IFormSwitch {
  formQuestion: FormQuestionSwitch;
  showHint: boolean;
  onClickHint: (formKey: string) => void;
}

function FormSwitch({ formQuestion, showHint, onClickHint }: IFormSwitch) {
  const answer = useFormAnswersContext()[formQuestion.id];
  if (typeof answer !== "boolean") throw new Error("Answer type must be boolean for the switch.");

  const setFormAnswers = useSetFormAnswersContext();

  const handleChangeSwitch = () => {
    setFormAnswers((answers: FormAnswers) => {
      answers[formQuestion.id] = !answer;
    });
  };

  return (
    <label className="flex justify-between gap-6">
      <button type="button" onClick={() => onClickHint(formQuestion.id)}>
        <span className="m-auto flex text-xl">
          {formQuestion.label}
          <ChevronRightIcon
            className={`${
              showHint ? "-rotate-90 border-orange-700 text-neutral-800" : "rotate-90 bg-white text-orange-700"
            }
              my-auto ml-2  h-6 w-6 rounded-lg border-2
              border-neutral-500 transition duration-200 ease-linear`}
          />
        </span>
      </button>
      <div className="flex w-36">
        <Switch
          checked={answer}
          onChange={handleChangeSwitch}
          className={`${answer ? "bg-orange-700" : "bg-neutral-600"}
            relative m-auto inline-flex h-[28px] w-[56px] shrink-0 cursor-pointer
            rounded-full border-2 border-transparent bg-opacity-90 transition-colors
            duration-200 ease-in-out focus:outline-none focus-visible:ring-2
          focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            aria-hidden="true"
            className={`${answer ? "translate-x-7" : "translate-x-0"}
              pointer-events-none inline-block h-[24px] w-[24px]
              transform rounded-full bg-white shadow-lg ring-0
              transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </label>
  );
}

export default FormSwitch;
