import { useEffect, useState } from "react";
import Pad from "@components/Pad";
import Preset from "@components/Preset";
import Power from "@components/Power";
import Volume from "@components/Volume";
import { IPreset, PresetEnum } from "./App.types";
import { presetPrimary, presetSecondary } from "./App.constants";

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
    <div className="box-border p-[10px] font-audiowide flex items-center w-screen h-screen bg-[#808080]">
      <div className="max-w-[800px] w-full md:max-h-[450px] h-full mx-auto flex md:flex-row flex-col-reverse max-h-full">
        <div className="md:basis-[60%] basis-[50%] p-[10px] grid grid-cols-3 grid-rows-3 gap-[20px]">
          {preset === PresetEnum.Primary
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
        <div className="md:basis-[40%] basis-[50%] p-[10px] grid grid-cols-2 grid-rows-3 gap-[20px]">
          <div
            data-testid="display"
            className="col-start-1 col-end-[-1] flex items-center justify-center rounded-[20px] bg-[#808080] shadow-[inset_3px_3px_6px_#787878,inset_-3px_-3px_6px_#888888]"
          >
            {display}
          </div>
          <Power btn="p" power={power} onChange={handlePowerChange} />
          <Preset btn="[" preset={preset} onChange={handlePresetChange} />
          <Volume volume={volume} onChange={handleVolumeChange} />
        </div>
      </div>
    </div>
  );
};

export default App;
