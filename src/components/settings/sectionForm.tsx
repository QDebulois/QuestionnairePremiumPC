import { FormSettings, FormChoices, isFormQuestionSelect } from "@/data/types";

interface IRenderComponents {
  formSettings: FormSettings;
  setFormSettings: (formSettings: FormSettings) => void;
}

function renderSectionForms({
  formSettings,
  setFormSettings,
}: IRenderComponents) {
  const handleChangecomps = (
    key: string,
    choiceId: string,
    prop: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formQuestion = { ...formSettings[key] };
    if (isFormQuestionSelect(formQuestion)) {
      formQuestion.choices = formQuestion.choices.map((choice) => {
        if (choice.id === choiceId) {
          const value = Number(e.target.value);
          choice[prop] = isNaN(value) ? 0 : value;
          return choice;
        }
        return choice;
      });
      setFormSettings({
        ...formSettings,
        [key]: formQuestion,
      });
    }
  };

  const renderEachChoice = (key: string, choice: FormChoices) => (
    <li key={choice.id}>
      <div className="float-right mt-1 text-sm">
        {choice.id} -
        {Object.keys(choice)
          .filter((prop) => prop !== "id")
          .map((prop) => (
            <label key={choice["id"] + "_" + prop}>
              {prop.slice(5)}:
              <input
                className="
                  mx-1 w-10 rounded-lg border-2
                border-sky-800 text-center text-sm"
                value={choice[prop]}
                onChange={(event) =>
                  handleChangecomps(key, choice.id, prop, event)
                }
              />
            </label>
          ))}
      </div>
    </li>
  );

  const renderEachQuestion = (key: string) => (
    <div key={key}>
      <h3
        className="
          border-b-2 border-sky-800 text-center font-bold text-orange-700"
      >
        {key}
      </h3>
      <ul>
        {Object.values(formSettings[key].choices).map((choice) =>
          renderEachChoice(key, choice)
        )}
      </ul>
    </div>
  );

  return (
    <section>
      <h2
        className="
          m-4 border-b-2 border-slate-700
          text-center text-2xl font-bold text-orange-700"
      >
        Configuration du formulaire
      </h2>
      <div className="m-auto flex w-3/4 flex-row flex-wrap justify-center gap-6">
        {Object.keys(formSettings)
          .filter((key) => isFormQuestionSelect(formSettings[key]))
          .map((key) => renderEachQuestion(key))}
      </div>
    </section>
  );
}

export default renderSectionForms;
