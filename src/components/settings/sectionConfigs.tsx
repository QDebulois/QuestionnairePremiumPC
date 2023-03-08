import { ConfigPc, ComponentCategories, ComponentPc } from "@/data/data";

interface IRenderConfigs {
  componentsPc: ComponentCategories;
  configsPc: ConfigPc[];
  setConfigsPc: (configs: ConfigPc[]) => void;
}

type ChangeEventSelectOrInput =
  | React.ChangeEvent<HTMLSelectElement>
  | React.ChangeEvent<HTMLInputElement>;

function renderSectionConfigs({
  componentsPc,
  configsPc,
  setConfigsPc,
}: IRenderConfigs) {
  const handleChangeConfs = (
    targConfIdx: string,
    targConfPart: string,
    e: ChangeEventSelectOrInput
  ) =>
    setConfigsPc(
      configsPc.map((config, index) => {
        if (index === Number(targConfIdx)) {
          if (typeof config[targConfPart] === "string") {
            config[targConfPart] = e.target.value;
          } else {
            config[targConfPart] =
              componentsPc[targConfPart].find(
                (comp) => comp.name === e.target.value
              ) || componentsPc[targConfPart][0];
          }
          return config;
        }
        return config;
      })
    );

  const renderCompWithSelect = (
    confIdx: string,
    confPart: string,
    prevConf: ComponentPc
  ) => (
    <label>
      {confPart}:
      <select
        className="w-24 border-2 rounded-md border-slate-700 text-sm ml-1 my-auto"
        value={prevConf.name}
        onChange={(event) => handleChangeConfs(confIdx, confPart, event)}
      >
        {Object.entries(componentsPc[confPart]).map(([_, comp]) => (
          <option key={comp.name} value={comp.name}>
            {comp.name}
          </option>
        ))}
      </select>
    </label>
  );

  const renderCompWithInput = (
    confIdx: string,
    confPart: string,
    prevConf: string
  ) => (
    <label className="text-sm">
      {confPart}:
      <input
        className={`${confPart === "name" ? "w-44" : "w-36"}
             border-2 rounded-md text-center border-slate-700 text-sm ml-1`}
        value={prevConf}
        onChange={(event) => handleChangeConfs(confIdx, confPart, event)}
      />
    </label>
  );

  const renderEachConfComp = (
    confIdx: string,
    confPart: string,
    prevConf: string | ComponentPc
  ) => (
    <li key={confIdx + "_" + confPart}>
      {typeof prevConf === "string"
        ? renderCompWithInput(confIdx, confPart, prevConf)
        : renderCompWithSelect(confIdx, confPart, prevConf)}
    </li>
  );

  const renderEachConf = (confIdx: string, config: ConfigPc) => (
    <li key={confIdx} className="mx-auto mt-1">
      <ul className="flex flex-row flex-wrap gap-2">
        {Object.entries(config).map(([confPart, prevConf]) =>
          renderEachConfComp(confIdx, confPart, prevConf)
        )}
      </ul>
    </li>
  );

  return (
    <section>
      <h2
        className="
          text-center text-orange-700 font-bold
          text-2xl border-b-2 border-slate-700 m-4"
      >
        Confurations PC
      </h2>
      <ul className="flex flex-col">
        {Object.entries(configsPc).map(([confIdx, config]) =>
          renderEachConf(confIdx, config)
        )}
      </ul>
    </section>
  );
}

export default renderSectionConfigs;
