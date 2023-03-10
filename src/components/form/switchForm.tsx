import { FormSettings, FormQuestionSwitch, isFormQuestionSwitch } from "@/data/data";
import { Disclosure, Switch, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";


interface IRenderSwitchFormPart {
  key: string;
  formQuestion: FormQuestionSwitch;
  formSettings: FormSettings;
  setFormSettings: (formSettings: FormSettings) => void;
}

function RenderSwitchFormPart({ key, formQuestion, formSettings, setFormSettings,}: IRenderSwitchFormPart) {
    const handleChangeSwitch = () => {
      const newFormQuestion = {...formSettings[key]}
      if (isFormQuestionSwitch(newFormQuestion)) {
        newFormQuestion.answer = !newFormQuestion.answer
      }
      setFormSettings({
        ...formSettings,
        [key]: newFormQuestion
      });
    }

    return (
      <>
        <Disclosure>
          {({ open }) => (
            <div>
              <label className="flex gap-6 justify-between">
                <Disclosure.Button className="">
                  <span className="flex m-auto text-xl">
                    {formQuestion.label}
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
                <div className="w-36 flex">
                  <Switch
                    checked={formQuestion.answer}
                    onChange={handleChangeSwitch}
                    className={`${formQuestion.answer ? "bg-orange-700" : "bg-neutral-600"}
                      m-auto relative inline-flex bg-opacity-90 h-[28px] w-[56px] shrink-0
                      cursor-pointer rounded-full border-2 border-transparent transition-colors
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
                  rounded-md bg-neutral-200 p-1 max-w-xs mt-2 mx-auto text-sm text-neutral-600"
                >
                  {formQuestion.description}
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      </>
    );
  };

export default RenderSwitchFormPart