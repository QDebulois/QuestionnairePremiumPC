import { useCardContext } from "./CardContext";

function CardInfos() {
  const cardConfigPc = useCardContext();

  return (
    <div className="mb-6 border-y-2 border-neutral-400 p-2 text-left text-lg text-neutral-600">
      <ul>
        <li>CPU: {cardConfigPc.configPc.CPU.name}</li>
        <li>RAM: {cardConfigPc.configPc.RAM.name}</li>
        <li>GPU: {cardConfigPc.configPc.GPU.name}</li>
      </ul>
    </div>
  );
}

export default CardInfos;
