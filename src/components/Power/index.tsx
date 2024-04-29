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
      />
      <label htmlFor="power" className="drummachine__pad">
        {btn}
      </label>
    </div>
  );
};

export default Power;
