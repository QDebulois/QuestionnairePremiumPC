import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { FormQuestionSelect, FormSettings } from "@/data/data";

interface IRenderSelectFormPart {
  key: string;
  formQuestion: FormQuestionSelect;
  formSettings: FormSettings;
  setFormSettings: (formSettings: FormSettings) => void;
}

function RenderSelectFormPart({ key, formQuestion, formSettings, setFormSettings, }: IRenderSelectFormPart) {
  const handleChangeSelect = (key: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFormQuestion = { ...formQuestion };
    newFormQuestion.answer = e.target.value;
    setFormSettings({
      ...formSettings,
      [key]: newFormQuestion,
    });
  };

  return (
    <Disclosure key={key}>
      {({ open }) => (
        <div>
          <label className="flex gap-6">
            <Disclosure.Button className="">
              <span className="flex m-auto text-xl">
                {formQuestion.label}
                <ChevronRightIcon
                  className={`
                      ${open
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
                  w-36 border-2 rounded-lg text-center border-sky-800 text-lg ml-auto my-auto"
              onChange={(e) => handleChangeSelect(key, e)}
            >
              {Object.values(formQuestion.choices)
                .map((choice) =>
                  <option key={choice.id} value={choice.id}>
                    {choice.id}
                  </option>
                )}
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
              {formQuestion.description}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}

export default RenderSelectFormPart;
