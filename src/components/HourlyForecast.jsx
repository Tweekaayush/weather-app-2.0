import React from "react";
import { useSelector } from "react-redux";
import { getTime } from "../utils/date.util";

const HourlyForecast = () => {
  const {
    data: { hourlyForecast, currentWeather },
  } = useSelector((state) => state.weather);

  return (
    <div className="pt-4">
      <h1 className="heading-1">Today at</h1>
      <div className="flex flex-col gap-4 overflow-x-auto scrollbar-hide">
        <ul className="flex gap-4">
          {hourlyForecast?.map((data, i) => {
            return (
              <li className="flex flex-col items-center min-w-38 card">
                <p className="body-text">
                  {getTime(data?.dt, currentWeather?.timezone)}
                </p>
                <img
                  src="assets/images/weather_icons/01d.png"
                  className="w-15 h-15 my-4"
                  alt="smoke"
                />
                <p className="body-text">
                  29.65&deg;
                </p>
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-4 mb-4">
          {hourlyForecast?.map((data, i) => {
            return (
              <li className="flex flex-col items-center min-w-38 card">
                <p className="body-text">
                  {getTime(data?.dt, currentWeather?.timezone)}
                </p>
                <img
                  src="assets/images/weather_icons/direction.png"
                  className="w-15 h-15 my-4"
                  style={{transform: `rotate(${data?.wind?.deg-180}deg)`}}
                />
                <p className="body-text">
                  29.65&deg;
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HourlyForecast;
