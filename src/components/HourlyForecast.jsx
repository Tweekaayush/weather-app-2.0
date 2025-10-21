import React from "react";

const HourlyForecast = () => {
  return (
    <div className="">
      <h1 className="heading-1">Today at</h1>
      <div className="slider flex flex-col gap-4 overflow-y-auto">
        <ul className="flex">
          <li className="card">
            <h4 className="heading-2">11:30</h4>
            <img src="" alt="" />
            <h4 className="heading-2">29.65&deg;</h4>
          </li>
        </ul>
        <ul className="flex">
          <li className="card">
            <h4 className="heading-2">11:30</h4>
            <img src="" alt="" />
            <h4 className="heading-2">29.65&deg;</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HourlyForecast;
