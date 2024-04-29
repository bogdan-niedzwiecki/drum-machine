export interface PadProps {
  name: string;
  btn: string;
  url: string;
  power: boolean;
  volume: number;
  onPlay: (name: string) => void;
}
