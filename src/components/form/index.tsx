import { FormSettings, isFormQuestionSelect, isFormQuestionSwitch } from "@/data/data";
import RenderSelectFormPart from "./selectForm";
import RenderSwitchFormPart from "./switchForm";

interface IFormProps {
  formSettings: FormSettings;
  setFormSettings: (formSettings: FormSettings) => void;
}

function Form({ formSettings, setFormSettings }: IFormProps) {
  return (
    <section className="flex flex-col justify-around">
      <div
        className="
        flex flex-col justify-around gap-8 p-8 bg-white rounded-lg border-4
      border-orange-500 shadow-xl shadow-black text-center"
      >
        <h2
          className='
          font-["caxo"] text-center text-orange-700 font-bold
          text-2xl border-b-2 border-sky-800 mx-14'
        >
          Questions
        </h2>
        {Object.keys(formSettings).map((key) => {
          const formQuestion = formSettings[key]
          if (isFormQuestionSelect(formQuestion)) {
            return RenderSelectFormPart({ key, formQuestion, formSettings, setFormSettings })
          } else {
            return RenderSwitchFormPart({ key, formQuestion, formSettings, setFormSettings })
          }
        })}
      </div>
    </section>
  );
}

export default Form;
