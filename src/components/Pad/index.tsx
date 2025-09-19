import { useEffect, useState, useMemo, useCallback } from "react";
import classNames from "classnames";
import { PadProps } from "./Pad.types";

const Pad = ({ name, btn, url, power, volume, onPlay }: PadProps) => {
  const audio = useMemo(() => new Audio(url), [url]);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === btn) setPressed(true);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === btn) setPressed(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [btn]);

  const handlePlay = useCallback(() => {
    if (power) {
      audio.volume = volume;
      audio.pause();
      audio.currentTime = 0;
      audio.play();
      onPlay(name);
    }
  }, [audio, name, power, volume, onPlay]);

  useEffect(() => {
    if (pressed) handlePlay();
  }, [pressed, handlePlay]);

  const padClass = classNames(
    "h-full text-[1.3em] active:shadow-[inset_7px_7px_16px_#787878,inset_-7px_-7px_16px_#888888,7px_7px_16px_#787878,-7px_-7px_16px_#888888] active:text-[1.25em] rounded-[20px] focus-visible:outline-none bg-[#808080] shadow-[inset_0_0_0_#787878,inset_0_0_0_#888888,7px_7px_16px_#787878,-7px_-7px_16px_#888888] flex justify-center items-center cursor-pointer select-none transition-all duration-[50ms] border-none font-inherit tap-transparent",
    {
      "shadow-[inset_7px_7px_16px_#787878,inset_-7px_-7px_16px_#888888,7px_7px_16px_#787878,-7px_-7px_16px_#888888] text-[1.25em]":
        pressed,
    }
  );

  return (
    <button
      data-testid="pad"
      type="button"
      className={padClass}
      onClick={handlePlay}
    >
      {btn}
    </button>
  );
};

export default Pad;
