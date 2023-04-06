import { FormSettings, isFormQuestionSelect } from "@/data/data";
import RenderSelectFormPart from "./selectForm";
import RenderSwitchFormPart from "./switchForm";

// https://react.dev/learn/sharing-state-between-components
// Rajouter la possibilité de n'avoir qu'un sous menu actif à la fois.

interface IFormProps {
  formSettings: FormSettings;
  setFormSettings: (formSettings: FormSettings) => void;
}

function Form({ formSettings, setFormSettings }: IFormProps) {
  return (
    <section
      className="
        flex flex-col justify-around gap-8 rounded-lg border-4 border-orange-500 bg-white
        p-8 text-center shadow-xl shadow-black"
    >
      <h2
        className='
          mx-14 border-b-2 border-sky-800 text-center
          font-["caxo"] text-2xl font-bold text-orange-700'
      >
        Questions
      </h2>
      {Object.keys(formSettings).map((key) => {
        const formQuestion = formSettings[key];
        if (isFormQuestionSelect(formQuestion)) {
          return RenderSelectFormPart({
            key,
            formQuestion,
            formSettings,
            setFormSettings,
          });
        } else {
          return RenderSwitchFormPart({
            key,
            formQuestion,
            formSettings,
            setFormSettings,
          });
        }
      })}
    </section>
  );
}

export default Form;
