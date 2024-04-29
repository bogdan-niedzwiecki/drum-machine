import { ChangeEvent, useEffect } from "react";
import { VolumeProps } from "./Volume.types";

const Volume = ({ volume, onChange }: VolumeProps) => {
  useEffect(() => {
    const handleArrowKeyDown = ({ key }: KeyboardEvent) => {
      if (key === "ArrowUp" || key === "ArrowRight") {
        onChange(Math.min(Number((volume + 0.05).toFixed(2)), 1));
        return;
      }

      if (key === "ArrowDown" || key === "ArrowLeft") {
        onChange(Math.max(Number((volume - 0.05).toFixed(2)), 0));
      }
    };

    document.addEventListener("keydown", handleArrowKeyDown);

    return () => {
      document.removeEventListener("keydown", handleArrowKeyDown);
    };
  }, [volume, onChange]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className="drummachine__volume">
      <input
        data-testid="volume"
        type="range"
        step="0.05"
        min="0"
        max="1"
        value={volume}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Volume;
