import React from "react";
import { useSelector } from "react-redux";
import { getFullDate } from "../utils/date.util";

const WeeklyForecast = () => {
  const {
    data: { dayForecast, currentWeather },
  } = useSelector((state) => state.weather);
  return (
    <div className="card">
      <h1 className="heading-1">Forecast</h1>
      <ul className="flex flex-col">
        {dayForecast?.map((day, i) => {
          return (
            <li
              key={day?.dt}
              className="grid grid-cols-[2fr_2fr_8fr] gap-4 items-center hover:bg-gray-100 dark:hover:bg-gray-800 py-2 cursor-pointer"
            >
              <img
                src={`assets/images/weather_icons/${day?.weather[0]?.icon}.png`}
                className="w-10 h-10"
                alt={day?.weather[0]?.description}
              />
              <p className="body-text">
                {day?.main?.temp}&deg;
              </p>
              <p className="body-text">
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
