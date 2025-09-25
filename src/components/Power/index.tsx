import { useEffect } from "react";
import { PowerProps } from "./Power.types";

const Power = ({ btn, power, onChange }: PowerProps) => {
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
        name="power"
        id="power"
        checked={power}
        onChange={onChange}
        className="absolute w-0 h-0 peer"
      />
      <label
        data-testid="power"
        htmlFor="power"
        className="drummachine__pad peer-checked:!shadow-[inset_7px_7px_16px_#787878,inset_-7px_-7px_16px_#888888,7px_7px_16px_#787878,-7px_-7px_16px_#888888] peer-checked:!text-[1.25em]"
      >
        {btn}
      </label>
    </div>
  );
};

export default Power;
