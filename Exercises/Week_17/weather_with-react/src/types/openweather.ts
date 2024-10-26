interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  see_level: number;
  grnd_level: number;
}

type Visibility = number;
interface IWind {
  speed: number;
  deg: number;
  gust: number;
}
type TimeZone = number;
type Name = string;

export interface IWeatherResDto {
  weather: IWeather[];
  main: IMain;
  visibility: Visibility;
  wind: IWind;
  timezone: TimeZone;
  name : Name;
}
