import { Transition } from "@headlessui/react";
import { ReactNode, memo } from "react";

interface IFormInput {
  showHint: boolean;
  children: ReactNode;
}

const FormHint = memo(({ showHint, children }: IFormInput) => {
  return (
    <Transition
      show={showHint}
      enter="transition duration-150 ease-out"
      enterFrom="transform scale-90 opacity-0 -translate-y-10"
      enterTo="transform scale-100 opacity-100 translate-y-0"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-90 opacity-0"
    >
      <div className="mx-auto mt-2 max-w-xs rounded-md bg-neutral-200 p-1 text-sm text-neutral-600">
        {children}
      </div>
    </Transition>
  );
})
FormHint.displayName = "FormHint";


export default FormHint;
