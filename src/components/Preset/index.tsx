import { useEffect } from "react";
import { PresetProps } from "./Preset.types";

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
        checked={preset === "secondary"}
        onChange={onChange}
      />
      <label htmlFor="preset" className="drummachine__pad">
        {btn}
      </label>
    </div>
  );
};

export default Preset;
