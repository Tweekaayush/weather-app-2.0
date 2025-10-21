import React from "react";
import { useSelector } from "react-redux";
import { getFullDate } from "../utils/date.util";

const WeeklyForecast = () => {
  const {
    data: { dayForecast, currentWeather },
  } = useSelector((state) => state.weather);
  return (
    <div className="card">
      <h1 className="heading-1">5 Days Forecast</h1>
      <ul className="flex flex-col">
        {dayForecast?.map((day, i) => {
          return (
            <li
              key={day?.dt}
              className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 py-2 cursor-pointer"
            >
              <img
                src={`assets/images/weather_icons/${day?.weather[0]?.icon}.png`}
                className="w-10 h-10"
                alt={day?.weather[0]?.description}
              />
              <p className="text-sm tracking-wider text-gray-700 dark:text-gray-300">
                {day?.main?.temp}&deg;<sup>c</sup>
              </p>
              <p className="text-sm tracking-wider text-gray-700 dark:text-gray-300">
                {getFullDate(day?.dt, currentWeather?.timezone)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WeeklyForecast;
