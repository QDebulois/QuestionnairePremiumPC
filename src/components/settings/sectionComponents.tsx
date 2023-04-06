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
    e: React.ChangeEvent<HTMLInputElement>
  ) =>
    setComponentsPc({
      ...componentsPc,
      [targCompCat]: componentsPc[targCompCat].map((comp) => {
        if (comp.name === targetedcompName) {
          const value = Number(e.target.value);
          comp.score = isNaN(value) ? 0 : value;
          return comp;
        }
        return comp;
      }),
    });

  const renderEachcomp = (comp: ComponentPc, compCat: string) => (
    <li key={comp.name}>
      <label className="float-right mt-1 text-sm">
        {comp.name} - Score:
        <input
          className="
              ml-1 w-10 rounded-lg border-2
            border-sky-800 text-center text-sm"
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
          border-b-2 border-sky-800 text-center font-bold text-orange-700"
      >
        {compCat}
      </h3>
      <ul>
        {Object.values(componentsPc[compCat]).map((comp) =>
          renderEachcomp(comp, compCat)
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
        Configurations Composants
      </h2>
      <div className="m-auto flex w-3/4 flex-row flex-wrap justify-center gap-6">
        {Object.keys(componentsPc).map((category) =>
          renderEachcompCat(category)
        )}
      </div>
    </section>
  );
}

export default renderSectionComponents;
