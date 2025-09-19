import { useEffect } from "react";
import { PresetProps } from "./Preset.types";
import { PresetEnum } from "../../App.types";

const Preset = ({ btn, preset, onChange }: PresetProps) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === btn) onChange();
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [btn, onChange]);

  return (
    <div>
      <input
        type="checkbox"
        name="preset"
        id="preset"
        checked={preset === PresetEnum.Secondary}
        onChange={onChange}
        className="absolute w-0 h-0 peer"
      />
      <label
        data-testid="preset"
        htmlFor="preset"
        className="h-full text-[1.3em] rounded-[20px] bg-[#808080] shadow-[inset_0_0_0_#787878,inset_0_0_0_#888888,7px_7px_16px_#787878,-7px_-7px_16px_#888888] flex justify-center items-center cursor-pointer select-none transition-all duration-[50ms] border-none font-inherit tap-transparent focus-visible:outline-none peer-checked:shadow-[inset_7px_7px_16px_#787878,inset_-7px_-7px_16px_#888888,7px_7px_16px_#787878,-7px_-7px_16px_#888888] peer-checked:text-[1.25em]"
      >
        {btn}
      </label>
    </div>
  );
};

export default Preset;
