import {
  Droplet,
  Eye,
  Moon,
  Sun,
  Thermometer,
  Waves,
  Wind,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTime } from "../utils/date.util";
import Skeleton from "./Skeleton";

const WeatherHighlights = () => {
  const [airQualityIndex, setAirQualityIndex] = useState("");
  const [cls, setCls] = useState("bg-green-500");
  const {
    loading: { isWeatherLoading },
    data: { currentWeather, pollutionDetails },
  } = useSelector((state) => state.weather);

  const setAQI = (aqi) => {
    switch (aqi) {
      case 1:
        setAirQualityIndex("Good");
        setCls("bg-green-600");
        break;
      case 2:
        setAirQualityIndex("Fair");
        setCls("bg-teal-600");
        break;
      case 3:
        setAirQualityIndex("Moderate");
        setCls("bg-yellow-600");
        break;
      case 4:
        setAirQualityIndex("Poor");
        setCls("bg-orange-600");
        break;
      case 5:
        setAirQualityIndex("Very Poor");
        setCls("bg-red-600");
        break;
      default:
        setAirQualityIndex("Good");
    }
  };

  useEffect(() => {
    setAQI(pollutionDetails[0]?.main?.aqi);
  }, [pollutionDetails[0]?.main?.aqi]);

  return (
    <div className="card">
      <h1 className="heading-1">Today's Highlights</h1>
      {!isWeatherLoading ? (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h5 className="heading-2">Air Quality Index</h5>
              <p
                className={`${cls} text-white font-bold text-xs px-4 py-1 rounded-3xl`}
              >
                {airQualityIndex}
              </p>
            </div>
            <div className="flex gap-4 items-center justify-between">
              <Wind className="w-8 h-8 text-gray-800 dark:text-gray-200" />
              <ul className="flex justify-between gap-4 flex-1">
                <li className="flex-1 flex flex-col items-center">
                  <h6 className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                    PM<sub>2.5</sub>
                  </h6>
                  <h3 className="body-text-2">
                    {pollutionDetails[0]?.components.pm2_5}
                  </h3>
                </li>
                <li className="flex-1 flex flex-col items-center">
                  <h6 className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                    SO<sub>2</sub>
                  </h6>
                  <h3 className="body-text-2">
                    {pollutionDetails[0]?.components.so2}
                  </h3>
                </li>
                <li className="flex-1 flex flex-col items-center">
                  <h6 className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                    NO<sub>2</sub>
                  </h6>
                  <h3 className="body-text-2">
                    {pollutionDetails[0]?.components.no2}
                  </h3>
                </li>
                <li className="flex-1 flex flex-col items-center">
                  <h6 className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                    O<sub>3</sub>
                  </h6>
                  <h3 className="body-text-2">
                    {pollutionDetails[0]?.components.o3}
                  </h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:row-span-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col justify-around gap-4">
            <div className="flex flex-col">
              <h5 className="heading-2 mb-4">Sunrise</h5>
              <div className="flex justify-between">
                <p className="body-text-2">
                  {getTime(
                    currentWeather?.sys?.sunrise,
                    currentWeather?.timezone
                  )}
                </p>
                <Sun className="w-10 h-10 text-gray-800 dark:text-gray-200" />
              </div>
            </div>
            <div className="flex flex-col">
              <h5 className="heading-2 mb-4">Sunset</h5>
              <div className="flex justify-between">
                <p className="body-text-2">
                  {getTime(
                    currentWeather?.sys?.sunset,
                    currentWeather?.timezone
                  )}
                </p>
                <Moon className="w-10 h-10 text-gray-800 dark:text-gray-200" />
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h4 className="heading-2 mb-4">Humidity</h4>
            <div className="flex justify-between items-center">
              <Droplet className="icon" />
              <div className="flex items-end">
                <p className="body-text-2">{currentWeather?.main?.humidity}</p>
                <span className="sub">%</span>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h4 className="heading-2 mb-4">Pressure</h4>
            <div className="flex justify-between items-center">
              <Waves className="icon" />
              <div className="flex items-end">
                <p className="body-text-2">{currentWeather?.main?.pressure}</p>
                <span className="sub">hba</span>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h4 className="heading-2 mb-4">Visibility</h4>
            <div className="flex justify-between items-center">
              <Eye className="icon" />
              <div className="flex items-end">
                <p className="body-text-2">
                  {currentWeather?.visibility / 1000}
                </p>
                <span className="sub">km</span>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h4 className="heading-2 mb-4">Wind</h4>
            <div className="flex justify-between items-center">
              <Wind className="icon" />
              <div className="flex items-end">
                <p className="body-text-2">
                  {(currentWeather?.wind?.speed * 3.6).toPrecision(3)}
                </p>
                <span className="sub">km/h</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4">
          <Skeleton cls="col-span-12 h-30" />
          <Skeleton cls="col-span-12 lg:row-span-2 md:col-span-6" />
          <Skeleton cls="col-span-6 lg:col-span-3 h-20" />
          <Skeleton cls="col-span-6 lg:col-span-3 h-20" />
          <Skeleton cls="col-span-6 lg:col-span-3 h-20" />
          <Skeleton cls="col-span-6 lg:col-span-3 h-20" />
        </div>
      )}
    </div>
  );
};

export default WeatherHighlights;
