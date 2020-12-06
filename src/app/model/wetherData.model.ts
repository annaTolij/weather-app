export interface InfoList {
  cod: string;
  count: number;
  list: WetherData[];
  message: string;
}

export interface WetherData {
  clouds: Clouds;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  weather: Weather[];
  wind: Wind;
}

export interface Clouds {
  all: number;
}
export interface Coord {
  lat: number;
  lon: number;
}
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface Sys {
  country: string;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}
