export interface LaunchDto {
  id: string;
  name: string;
  pad: PadDto;
}

export interface PadDto {
  id: number;
  latitude: string;
  longitude: string;
  name: string;
}
