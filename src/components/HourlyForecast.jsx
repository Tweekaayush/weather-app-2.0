import React from "react";
import { useSelector } from "react-redux";
import { getTime } from "../utils/date.util";

const HourlyForecast = () => {
  const {
    data: { hourlyForecast, currentWeather },
  } = useSelector((state) => state.weather);

  return (
    <div className="">
      <h1 className="heading-1">Today at</h1>
      <div className="flex flex-col gap-4 overflow-x-auto scrollbar-hide">
        <ul className="flex gap-4">
          {hourlyForecast?.map((data, i) => {
            return (
              <li className="flex flex-col items-center min-w-38 card">
                <h4 className="heading-4">
                  {getTime(data?.dt, currentWeather?.timezone)}
                </h4>
                <img
                  src="assets/images/weather_icons/01d.png"
                  className="w-15 h-15 my-4"
                  alt="smoke"
                />
                <h4 className="heading-4">
                  29.65&deg;
                </h4>
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-4 mb-4">
          {hourlyForecast?.map((data, i) => {
            return (
              <li className="flex flex-col items-center min-w-38 card">
                <h4 className="heading-4">
                  {getTime(data?.dt, currentWeather?.timezone)}
                </h4>
                <img
                  src="assets/images/weather_icons/direction.png"
                  className="w-15 h-15 my-4"
                  style={{transform: `rotate(${data?.wind?.deg-180}deg)`}}
                />
                <h4 className="heading-4">
                  29.65&deg;
                </h4>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HourlyForecast;
