import { ComponentPc, ComponentCategories } from "@/data/data";

interface IRenderComponents {
  componentsPc: ComponentCategories;
  setComponentsPc: (componentsPc: ComponentCategories) => void;
}

function renderSectionComponents({
  componentsPc,
  setComponentsPc,
}: IRenderComponents) {
  const handleChangecomps = (
    targCompCat: string,
    targetedcompName: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) =>
    setComponentsPc({
      ...componentsPc,
      [targCompCat]: componentsPc[targCompCat].map((comp) => {
        if (comp.name === targetedcompName) {
          const value = Number(event.target.value);
          comp.score = isNaN(value) ? 0 : value;
          return comp;
        }
        return comp;
      }),
    });

  const renderEachcomp = (comp: ComponentPc, compCat: string) => (
    <li key={comp.name}>
      <label className="text-sm float-right mt-1">
        {comp.name} -{" "}
        {["jeux", "resolution", "framerate", "qualite"].includes(compCat)
          ? "valeur"
          : "score"}
        :
        <input
          className="
              w-10 border-2 rounded-lg text-center
            border-sky-800 text-sm ml-1"
          value={comp.score}
          onChange={(event) => handleChangecomps(compCat, comp.name, event)}
        />
      </label>
    </li>
  );

  const renderEachcompCat = (compCat: string) => (
    <div key={compCat}>
      <h3
        className="
          text-center text-orange-700 font-bold border-b-2 border-sky-800"
      >
        {compCat}
      </h3>
      <ul>
        {Object.entries(componentsPc[compCat]).map(([_, comp]) =>
          renderEachcomp(comp, compCat)
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
        Configurations Composants
      </h2>
      <div className="flex flex-row flex-wrap gap-6 w-3/4 m-auto justify-center">
        {Object.keys(componentsPc).map((category) =>
          renderEachcompCat(category)
        )}
      </div>
    </section>
  );
}

export default renderSectionComponents;
