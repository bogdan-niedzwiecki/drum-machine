import { ChangeEvent, useEffect } from "react";
import { VolumeProps } from "./Volume.types";
import styles from "./Volume.module.scss";

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
    <div className="col-start-1 col-end-[-1] tap-transparent">
      <input
        className={`${styles.range} box-border appearance-none w-full rounded-[20px] bg-[#808080] shadow-[inset_3px_3px_6px_#787878,inset_-3px_-3px_6px_#888888] cursor-pointer transition-all duration-[50ms] p-[5px] outline-none active:shadow-[inset_5px_5px_10px_#787878,inset_-5px_-5px_10px_#888888,5px_5px_10px_#787878,-5px_-5px_10px_#888888]`}
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
