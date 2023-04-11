import { ChangeEventSelectOrInput } from "@/data/types";

interface ISettingsConfigsInput {
  pcConfigIndex: string;
  pcPart: string;
  pcComponent: string;
  handleChangeConfs: (pcConfigIndex: string, pcPart: string, e: ChangeEventSelectOrInput) => void;
}

function SettingsConfigsInput({ pcConfigIndex, pcPart, pcComponent, handleChangeConfs }: ISettingsConfigsInput) {
  return (
    <label className="text-sm">
      {pcPart}:
      <input
        className={`${
          pcPart === "name" ? "w-44" : "w-36"
        } ml-1 rounded-md border-2 border-slate-700 text-center text-sm`}
        value={pcComponent}
        onChange={(e) => handleChangeConfs(pcConfigIndex, pcPart, e)}
      />
    </label>
  );
}

export default SettingsConfigsInput;
