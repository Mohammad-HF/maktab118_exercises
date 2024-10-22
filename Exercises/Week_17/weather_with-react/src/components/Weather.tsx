import { FaTemperatureHalf, FaWind } from "react-icons/fa6";
import { IWeatherResDto } from "../types/openweather";
import { TbReload, TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { useEffect, useState } from "react";
import { fetchWeatherData } from "../apis/openther.api";

interface IGeometry {
  lat: number;
  lng: number;
}
export const Weather: React.FC<{ formatted: string; geo: IGeometry }> = ({
  formatted,
  geo,
}) => {
  const [weather, setWeather] = useState<IWeatherResDto>();
  const [reload, setReload] = useState<boolean>(false);
  const date = new Date();
  const diff = date.getTimezoneOffset() * 60000;
  const utc = date.getTime() + diff;
  if (!!weather) {
    const location = utc + weather?.timezone * 1000;
    date.setTime(location);
  }
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getWeatherData = async () => {
    setWeather(await fetchWeatherData(geo));
  };
  useEffect(() => {
    getWeatherData();
  }, [reload, geo]);
  return (
    !!weather && (
      <div className="max-w-[1600px] min-w-[330px] mx-auto border-2 border-white p-4 mt-2">
        <h2 className="text-2xl font-semibold text-blue-950 pb-4">
          Result for : <span className="text-teal-800">{formatted}</span>{" "}
          <button
            onClick={() => setReload(!reload)}
            className="hover:text-teal-800 text-white align-middle mb-1 active:animate-spin"
          >
            <TbReload />
          </button>
        </h2>
        <div className=" grid sm:grid-cols-2 bg-teal-700 rounded-md px-2 pt-2 pb-4">
          <div className="bg-teal-600 rounded-md m-2 pb-3">
            <img
              className="mx-auto"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />
            <div className="flex flex-col items-center px-2 min-w-52 text-white ">
              <h2 className="font-semibold">
                <span className="text-lg">{weather.weather[0].main} / </span>
                {weather.weather[0].description}
              </h2>
              <div className="flex justify-self-center text-sm">
                <div className="flex items-center">
                  <h2 className="text-white font-semibold ">
                    {Math.round(weather.main.temp_min - 273.15)}
                  </h2>
                  <TbTemperatureCelsius className="text-white size-4 " />
                  <span className=" font-semibold px-1 "> / </span>
                </div>
                <div className="flex items-center">
                  <h2 className="text-white font-semibold ">
                    {Math.round(weather.main.temp_max - 273.15)}
                  </h2>
                  <TbTemperatureCelsius className="text-white size-4 " />
                </div>
                <div className="flex items-center">
                  <h2 className="ml-2 align-baseline">
                    Feels Like {Math.round(weather.main.feels_like - 273.15)}
                  </h2>
                  <TbTemperatureCelsius className="text-white size-4 " />
                </div>
              </div>
              <div>
                {day[date.getDay()]},{" "}
                {date.getHours().toString().padStart(2, "0")}:
                {date.getMinutes().toString().padStart(2, "0")}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-4 justify-items-center p-2 pt-4">
            <div className="flex flex-col justify-center items-center bg-teal-500 px-4 py-2 rounded-md w-32 ">
              <div className="flex items-center">
                <FaTemperatureHalf className="fill-white/90 size-6 inline-block " />
                <h2 className="text-sm text-white/90 leading-4">temperature</h2>
              </div>
              <div className="flex items-center">
                <h2 className="text-white font-semibold text-xl ">
                  {Math.round(weather.main.temp - 273.15)}
                </h2>
                <TbTemperatureCelsius className="text-white size-5 " />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-teal-500 px-6 py-2 rounded-md w-32 ">
              <div className="flex items-center">
                <WiHumidity className="fill-white/90 size-7" />
                <h2 className="text-sm text-white/90 leading-4">humidity</h2>
              </div>
              <h2 className="text-white font-semibold text-xl pt-1">
                {weather.main.humidity}%
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center bg-teal-500 px-6 py-2 rounded-md w-32 ">
              <div className="flex items-center">
                <MdVisibility className="fill-white/90 size-6 mr-1" />
                <h2 className="text-sm text-white/90 leading-4">visibility </h2>
              </div>
              <h2 className="text-white font-semibold text-xl pt-1">
                {weather.visibility / 1000}
                <span className="text-sm">Km</span>
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center bg-teal-500 px-6 py-2 rounded-md w-32 ">
              <div className="flex items-center">
                <FaWind className="fill-white/90 size-6 mr-1" />
                <h2 className="text-sm text-white/90 leading-4">wind </h2>
              </div>
              <h2 className="text-white font-semibold text-xl pt-1">
                {Math.round(weather.wind.speed * 1.609)}
                <span className="text-sm">Km/h</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
