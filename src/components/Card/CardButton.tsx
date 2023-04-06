import { useCardContext } from "./CardContext";

function CardButton() {
  const cardConfigPc = useCardContext()

  return (
    <div className="flex justify-around">
      <button
        type="button"
        onClick={() =>
          alert(`Redirection vers la page pour acheter ${cardConfigPc.configPc.name}`)
        }
        className="
          rounded bg-red-700 px-6 py-2 text-sm
          font-medium uppercase leading-normal text-white
          shadow-lg shadow-neutral-600 transition
          duration-150 ease-in-out hover:bg-red-600 hover:shadow-red-500"
      >
        Acheter {cardConfigPc.configPc.name}
      </button>
    </div>
  );
}

export default CardButton
