import React from "react";

const HourlyForecast = () => {
  return (
    <div className="">
      <h1 className="heading-1">Today at</h1>
      <div className="slider flex flex-col gap-4 overflow-y-auto">
        <ul className="flex">
          <li className="card flex flex-col items-center">
            <h4 className="heading-3">11:30</h4>
            <img
              src="assets/images/weather_icons/01d.png"
              className="w-15 h-15 my-4"
              alt="smoke"
            />
            <h4 className="heading-3">
              29.65&deg;<sup>c</sup>
            </h4>
          </li>
        </ul>
        <ul className="flex">
          <li className="card flex flex-col items-center">
            <h4 className="heading-3">11:30</h4>
            <img
              src="assets/images/weather_icons/01d.png"
              className="w-15 h-15 my-4"
              alt="smoke"
            />
            <h4 className="heading-3">
              29.65&deg;<sup>c</sup>
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HourlyForecast;
