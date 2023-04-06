import {
  FormSettings,
  FormQuestionSwitch,
  isFormQuestionSwitch,
} from "@/data/data";
import { Disclosure, Switch, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface IRenderSwitchFormPart {
  key: string;
  formQuestion: FormQuestionSwitch;
  formSettings: FormSettings;
  setFormSettings: (formSettings: FormSettings) => void;
}

function RenderSwitchFormPart({
  key,
  formQuestion,
  formSettings,
  setFormSettings,
}: IRenderSwitchFormPart) {
  const handleChangeSwitch = () => {
    const newFormQuestion = { ...formSettings[key] };
    if (isFormQuestionSwitch(newFormQuestion)) {
      newFormQuestion.answer = !newFormQuestion.answer;
    }
    setFormSettings({
      ...formSettings,
      [key]: newFormQuestion,
    });
  };

  return (
    <Disclosure key={key}>
      {({ open }) => (
        <div>
          <label className="flex justify-between gap-6">
            <Disclosure.Button className="">
              <span className="m-auto flex text-xl">
                {formQuestion.label}
                <ChevronRightIcon
                  className={`
                        ${
                          open
                            ? "-rotate-90 border-orange-700 text-neutral-800"
                            : "rotate-90 bg-white text-orange-700"
                        }
                         my-auto ml-2  h-6 w-6 rounded-lg border-2
                         border-neutral-500 transition duration-200 ease-linear`}
                />
              </span>
            </Disclosure.Button>
            <div className="flex w-36">
              <Switch
                checked={formQuestion.answer}
                onChange={handleChangeSwitch}
                className={`${
                  formQuestion.answer ? "bg-orange-700" : "bg-neutral-600"
                }
                      relative m-auto inline-flex h-[28px] w-[56px] shrink-0 cursor-pointer
                      rounded-full border-2 border-transparent bg-opacity-90 transition-colors
                      duration-200 ease-in-out focus:outline-none focus-visible:ring-2
                    focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    formQuestion.answer ? "translate-x-7" : "translate-x-0"
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
                  mx-auto mt-2 max-w-xs rounded-md bg-neutral-200 p-1 text-sm text-neutral-600"
            >
              {formQuestion.description}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}

export default RenderSwitchFormPart;
