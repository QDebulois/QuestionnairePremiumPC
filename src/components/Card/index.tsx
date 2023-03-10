import Image from "next/image";
import { ConfigPc } from "@/data/data";
import { Transition } from "@headlessui/react";


interface ICardProps {
  scoreCPU: number;
  scoreRAM: number;
  scoreGPU: number;
  configPc: ConfigPc;
}

function Card({ scoreCPU, scoreRAM, scoreGPU, configPc }: ICardProps) {
  return (
    <Transition
      key={configPc.name} // Oblige REACT a rerender car nouvel élément
      show={true}
      appear={true}
      enter="transform transition duration-700 ease-out"
      enterFrom="opacity-0 -translate-x-5"
      enterTo="opacity-100 translate-x-0"
    >
      <section className="flex justify-center">
        <div className="
          block max-w-xs rounded-lg bg-white shadow-lg
        border-orange-500 border-4 shadow-black"
        >
          <a href="#" title={`Voir ${configPc.nom} en detail`}>
            <Image
              src={configPc.photoUrl}
              width="0"
              height="0"
              sizes="100vw"
              className="
              bg-sky-900 bg-opacity-70 h-48 w-full rounded-t-md
                border-b-2 border-neutral-400 py-2 px-16"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-medium leading-tight text-center text-neutral-800">
              {configPc.name}
            </h5>
            <div className="flex justify-around text-center text-lg text-neutral-600 font-bold">
              <div>CPU: <span className="text-orange-700">{scoreCPU}</span></div>
              <div>RAM: <span className="text-orange-700">{scoreRAM}</span></div>
              <div>GPU: <span className="text-orange-700">{scoreGPU}</span></div>
            </div>
            <div className="
              mb-6 p-2 text-lg text-neutral-600 text-left border-y-2 border-neutral-400"
            >
              <ul>
                <li>CPU: {configPc.CPU.name}</li>
                <li>RAM: {configPc.RAM.name}</li>
                <li>GPU: {configPc.GPU.name}</li>
              </ul>
            </div>
            <div className="flex justify-around">
              <button
                type="button"
                onClick={() =>
                  alert(`Redirection vers la page pour acheter ${configPc.name}`)
                }
                className="
                    rounded px-6 py-2 text-sm font-medium
                    uppercase leading-normal shadow-lg text-white
                  bg-red-700 shadow-neutral-600
                  hover:bg-red-600 hover:shadow-red-500
                    transition duration-150 ease-in-out"
              >
                Acheter {configPc.name}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  );
}

export default Card;
