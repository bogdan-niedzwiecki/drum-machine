import { useEffect, useState } from "react";
import Pad from "@components/Pad";
import Preset from "@components/Preset";
import Power from "@components/Power";
import Volume from "@components/Volume";
import { IPreset, PresetEnum } from "./App.types";
import { presetPrimary, presetSecondary } from "./App.constants";
import "./App.scss";

const App = () => {
  const [preset, setPreset] = useState<IPreset>(PresetEnum.Primary);
  const [power, setPower] = useState<boolean>(true);
  const [display, setDisplay] = useState<string>("Power On");
  const [volume, setVolume] = useState<number>(0.3);

  const handlePadPlay = (name: string) => {
    setDisplay(name);
  };

  const handlePowerChange = () => {
    setPower((power) => !power);
  };

  const handlePresetChange = () => {
    setPreset((preset) =>
      preset === PresetEnum.Primary ? PresetEnum.Secondary : PresetEnum.Primary
    );
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
  };

  useEffect(() => {
    setDisplay(`Volume: ${volume}`);
  }, [volume]);

  useEffect(() => {
    if (preset === PresetEnum.Primary) {
      setDisplay("Preset: Primary");
    } else {
      setDisplay("Preset: Secondary");
    }
  }, [preset]);

  useEffect(() => {
    if (power) {
      setDisplay("Power On");
    } else {
      setDisplay("Power Off");
    }
  }, [power]);

  return (
    <div className="app">
      <div className="drummachine">
        <div className="drummachine__drumpad">
          {preset === "primary"
            ? presetPrimary.map(({ name, url, btn }, index) => (
                <Pad
                  key={index}
                  name={name}
                  url={url}
                  btn={btn}
                  power={power}
                  volume={volume}
                  onPlay={handlePadPlay}
                />
              ))
            : presetSecondary.map(({ name, url, btn }, index) => (
                <Pad
                  key={index}
                  name={name}
                  url={url}
                  btn={btn}
                  power={power}
                  volume={volume}
                  onPlay={handlePadPlay}
                />
              ))}
        </div>
        <div className="drummachine__controlpanel">
          <div className="drummachine__display">{display}</div>
          <Power btn="p" power={power} onChange={handlePowerChange} />
          <Preset btn="[" preset={preset} onChange={handlePresetChange} />
          <Volume volume={volume} onChange={handleVolumeChange} />
        </div>
      </div>
    </div>
  );
};

export default App;
