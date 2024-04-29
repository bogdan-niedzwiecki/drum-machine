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

  const padClass = classNames("drummachine__pad", {
    "drummachine__pad--pressed": pressed,
  });

  return (
    <button type="button" className={padClass} onClick={handlePlay}>
      {btn}
    </button>
  );
};

export default Pad;
