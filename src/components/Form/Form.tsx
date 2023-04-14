import { FormAnswers } from "@/data/types";
import { ReactNode } from "react";
import { Updater } from "use-immer";

import { SetFormAnswersContext } from "./FormContext";

interface IFormProps {
  title: ReactNode;
  body: ReactNode;
  formAnswers: FormAnswers;
  setFormAnswers: Updater<FormAnswers>;
}

function Form({ title, body, setFormAnswers }: IFormProps) {
  return (
    <section className="flex flex-col justify-center">
      <SetFormAnswersContext.Provider value={setFormAnswers}>
        <div
          className="flex flex-col justify-around gap-8 rounded-lg border-4
            border-orange-500 bg-white p-8 text-center shadow-xl shadow-black"
        >
          {title}
          {body}
        </div>
      </SetFormAnswersContext.Provider>
    </section>
  );
}

export default Form;
