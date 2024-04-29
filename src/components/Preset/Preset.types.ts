import { IPreset } from "../../App.types";

export interface PresetProps {
  btn: string;
  preset: IPreset;
  onChange: () => void;
}
