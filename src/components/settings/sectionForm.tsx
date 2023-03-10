import { FormSettings, FormChoices, isFormQuestionSelect } from "@/data/data";

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
      <div className="text-sm float-right mt-1">
        {choice.id} -
        {Object.keys(choice)
          .filter((prop) => prop !== "id")
          .map((prop) => (
            <label key={choice["id"] + "_" + prop}>
              {prop.slice(5)}:
              <input
                className="
                  w-10 border-2 rounded-lg text-center
                border-sky-800 text-sm mx-1"
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
          text-center text-orange-700 font-bold border-b-2 border-sky-800"
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
          text-center text-orange-700 font-bold
          text-2xl border-b-2 border-slate-700 m-4"
      >
        Configuration du formulaire
      </h2>
      <div className="w-2/3 flex flex-wrap justify-around text-left mx-auto">
        <div className="text-sm mb-4">
          <span className="italic font-semibold border-b-2 border-neutral-500">
            Calcul GPU:{" "}
          </span>
          Résolution * Framerate * Qualité * Jeux.
        </div>
        <div className="text-sm mb-4">
          <span className="italic font-semibold border-b-2 border-neutral-500">
            Calcul CPU:{" "}
          </span>
          Si scoreGPU &lt;= 19 cpu = 1, si scoreGPU &lt;= 39 cpu = 2, si
          scoreGPU &lt;= 99 cpu = 3, si scoreGPU &lt;= 159 cpu = 4, sinon cpu =
          5, +1 si streming ou boost.
        </div>
        <div className="text-sm mb-4">
          <span className="italic font-semibold border-b-2 border-neutral-500">
            Calcul RAM:{" "}
          </span>
          Le score suit le CPU, si scoreCPU &lt;= 1 ram = 1, si scoreCPU &lt;= 3
          ram = 2, si scoreCPU == 4 ram = 3, sinon ram = 4.
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-6 w-3/4 m-auto justify-center">
        {Object.keys(formSettings)
          .filter((key) => isFormQuestionSelect(formSettings[key]))
          .map((key) => renderEachQuestion(key))}
      </div>
    </section>
  );

}

export default renderSectionForms;
