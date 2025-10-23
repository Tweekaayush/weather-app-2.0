import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeather } from "../slices/weatherSlice";
import { Calendar, MapPin } from "lucide-react";
import { getDay, getFullDate } from "../utils/date.util";

const CurrentWeather = () => {
  const dispatch = useDispatch();
  const {
    loading,
    data: { currentWeather, location },
  } = useSelector((state) => state.weather);
  return (
    <div className="card">
      <h4 className="heading-1">Now</h4>
      <div className="flex items-end gap-4 mb-8">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-3xl font-medium text-gray-700 dark:text-gray-200 mb-1">
            {getDay(currentWeather?.dt, currentWeather?.timezone)}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">23 Oct, 2025</p>
          <div className="flex">
            <h1 className="text-5xl font-medium text-gray-700 dark:text-gray-200 mb-1">
              26.34
            </h1>
            <span className="text-gray-700 dark:text-gray-300 text-3xl font-black ml-1">
              &deg;C
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Feels like {currentWeather?.main?.feels_like}&deg;</p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div>
             <img
              src={`assets/images/weather_icons/${currentWeather?.weather[0]?.icon}.png`}
              alt={currentWeather?.weather[0]?.description}
              className="w-20 h-20 object-contain"
            />
          </div>
          <p className="text-2xl text-gray-600 dark:text-gray-400 capitalize mb-4">{currentWeather?.weather[0]?.description}</p>
          <div className="flex items-center gap-2">
            <p className="body-text">
              <span className="font-bold mr-1">High:</span>
              {currentWeather?.main?.temp_max}&deg;
            </p>
            <p className="body-text">
              <span className="font-bold mr-1">Low:</span>
              {currentWeather?.main?.temp_min}&deg;
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 border-t py-4 border-gray-300 dark:border-gray-700">
        <MapPin className="icon" />
        <p className="body-text">{location?.city}, {location?.country}</p>
      </div>

      {/* <h1 className="heading-1">Now</h1>
      <div className="flex mb-4 justify-between">
        <h2 className="text-6xl text-gray-700 dark:text-gray-200">
          {currentWeather?.main?.temp}°<sup className="text-4.5xl">c</sup>
        </h2>
        <div className="flex items-center justify-center">
          {currentWeather?.weather && (
            <img
              src={`assets/images/weather_icons/${currentWeather?.weather[0]?.icon}.png`}
              alt="smoke"
              className="w-16 h-16 object-contain"
            />
          )}
        </div>
      </div>
      {currentWeather?.weather && (
        <h3 className="pb-4 mb-5 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-400 dark:border-gray-600">
          {currentWeather?.weather[0]?.description}
        </h3>
      )}
      <div className="flex gap-4 mb-3">
        <Calendar className="icon" />
        <h4 className="heading-2">
          {getFullDate(currentWeather?.dt, currentWeather?.timezone)}
        </h4>
      </div>
      <div className="flex gap-4">
        <MapPin className="icon" />
        <h4 className="heading-2">
          {location?.city}, {location?.country}
        </h4>
      </div> */}
    </div>
  );
};

export default CurrentWeather;
