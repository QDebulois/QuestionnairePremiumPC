import { useCardContext } from "./CardContext";

function CardScore() {
  const cardConfigPc = useCardContext();

  return (
    <>
      <h5 className="mb-2 text-center text-2xl font-medium leading-tight text-neutral-800">
        {cardConfigPc.configPc.name}
      </h5>
      <div className="flex justify-around text-center text-lg font-bold text-neutral-600">
        <div>
          CPU: <span className="text-orange-700">{cardConfigPc.scoreCPU}</span>
        </div>
        <div>
          RAM: <span className="text-orange-700">{cardConfigPc.scoreRAM}</span>
        </div>
        <div>
          GPU: <span className="text-orange-700">{cardConfigPc.scoreGPU}</span>
        </div>
      </div>
    </>
  );
}

export default CardScore;
