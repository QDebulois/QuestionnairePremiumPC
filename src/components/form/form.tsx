import { FormSettings } from "@/data/data";
import { Disclosure, Transition, Switch } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

interface IFormProps {
  formSettings: FormSettings;
  setFormSettings: (formSettings: FormSettings) => void;
}

function Form({ formSettings, setFormSettings }: IFormProps) {
  const handleChangeForm = (
    key: string,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newFormSetting = { ...formSettings[key] };
    newFormSetting.answer = e.target.value;
    setFormSettings({
      ...formSettings,
      [key]: newFormSetting,
    });
  };

  const renderSelectFormPart = (key: string) => {
    return (
      <Disclosure key={key}>
        {({ open }) => (
          <div>
            <label className="flex gap-6">
              <Disclosure.Button className="">
                <span className="flex m-auto text-xl">
                  {formSettings[key].label}
                  <ChevronRightIcon
                    className={`
                      ${
                        open
                          ? "-rotate-90 border-orange-700 text-neutral-800"
                          : "rotate-90 text-orange-700 bg-white"
                      }
                      h-6 w-6  my-auto ml-2 border-2 border-neutral-500
                      rounded-lg transition duration-200 ease-linear`}
                  />
                </span>
              </Disclosure.Button>
              <select
                className="
                  w-24 border-2 rounded-lg text-center border-sky-800 text-lg ml-auto my-auto"
                onChange={(e) => handleChangeForm(key, e)}
              >
                {Object.values(formSettings[key].choices).map((choice) => (
                  <option key={choice.id} value={choice.id}>
                    {choice.id}
                  </option>
                ))}
              </select>
            </label>
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-90 opacity-0 -translate-y-10"
              enterTo="transform scale-100 opacity-100 translate-y-0"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-90 opacity-0"
            >
              <Disclosure.Panel
                className="
                rounded-md bg-neutral-200 p-1 max-w-xs mt-2 mx-auto text-sm text-neutral-600"
              >
                {formSettings[key].description}
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    );
  };

  const [switched, setSwitched] = useState(false);
  const renderSwitchFormPart = () => {
    return (
      <>
        {/*<p>Streaming et/ou Montage vidéo</p>*/}
        <Disclosure>
          {({ open }) => (
            <div>
              <label className="flex gap-6 justify-between">
                <Disclosure.Button className="">
                  <span className="flex m-auto text-xl">
                    Configuration Gaming
                    <ChevronRightIcon
                      className={`
                        ${
                          open
                            ? "-rotate-90 border-orange-700 text-neutral-800"
                            : "rotate-90 text-orange-700 bg-white"
                        }
                         h-6 w-6  my-auto ml-2 border-2 border-neutral-500
                         rounded-lg transition duration-200 ease-linear`}
                    />
                  </span>
                </Disclosure.Button>
                <div className="w-24 flex">
                  <Switch
                    checked={switched}
                    onChange={setSwitched}
                    className={`${switched ? "bg-orange-700" : "bg-neutral-600"}
                      m-auto relative inline-flex bg-opacity-90 h-[28px] w-[56px] shrink-0
                      cursor-pointer rounded-full border-2 border-transparent transition-colors
                      duration-200 ease-in-out focus:outline-none focus-visible:ring-2
                    focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span
                      aria-hidden="true"
                      className={`${
                        switched ? "translate-x-7" : "translate-x-0"
                      }
                        pointer-events-none inline-block h-[24px] w-[24px]
                        transform rounded-full bg-white shadow-lg ring-0
                        transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
              </label>
              <Transition
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-90 opacity-0 -translate-y-10"
                enterTo="transform scale-100 opacity-100 translate-y-0"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-90 opacity-0"
              >
                <Disclosure.Panel
                  className="
                  rounded-md bg-neutral-200 p-1 max-w-xs mt-2 mx-auto text-sm text-neutral-600"
                >
                  Pour les vrais Gaimer! Mode Jeux Activated 😎.
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      </>
    );
  };

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
        {Object.keys(formSettings).map((key) => renderSelectFormPart(key))}
        {renderSwitchFormPart()}
      </div>
    </section>
  );
}

export default Form;
