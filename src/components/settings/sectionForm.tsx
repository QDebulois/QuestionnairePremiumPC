import { FormSettings, FormQuestion, FormChoices } from "@/data/data";

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
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFormSetting = {...formSettings[key]};
    newFormSetting.choices = newFormSetting.choices.map((choice) => {
      if (choice.id === choiceId) {
        const value = Number(event.target.value);
        choice.score = isNaN(value) ? 0 : value;
        return choice;
      }
      return choice;
    })
    setFormSettings({
      ...formSettings,
      [key]: newFormSetting,
      }
    );
  }

  const renderEachChoice = (key: string, choice: FormChoices) => (
    <li key={choice.id}>
      <label className="text-sm float-right mt-1">
        {choice.id} - valeur:
        <input
          className="
              w-10 border-2 rounded-lg text-center
            border-sky-800 text-sm ml-1"
          value={choice.score}
          onChange={(event) => handleChangecomps(key, choice.id, event)}
        />
      </label>
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
      <p className="text-sm mb-4">
        <span className="italic font-semibold border-b-2 border-neutral-500">
          Calcul:{" "}
        </span>
        Résolution * Framerate * Qualité * Jeux
      </p>
      <div className="flex flex-row flex-wrap gap-6 w-3/4 m-auto justify-center">
        {Object.keys(formSettings).map((key) => renderEachQuestion(key))}
      </div>
    </section>
  );
}

export default renderSectionForms;
