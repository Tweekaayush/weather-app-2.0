import React from "react";

const WeeklyForecast = () => {
  return (
    <div className="card">
      <h1 className="heading-1">5 Days Forecast</h1>
      <ul className="flex flex-col">
        <li className="flex justify-between gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 cursor-pointer">
          <img src="" alt="" />
          <p className="text-sm tracking-wider text-gray-700 dark:text-gray-300">28.17&deg;</p>
          <p className="text-sm tracking-wider text-gray-700 dark:text-gray-300">Wednesday 22, Oct</p>
        </li>
        <li className="flex justify-between gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 cursor-pointer">
          <img src="" alt="" />
          <p className="text-sm tracking-wider text-gray-700 dark:text-gray-300"> 28.17&deg;</p>
          <p className="text-sm tracking-wider text-gray-700 dark:text-gray-300">Wednesday 22, Oct</p>
        </li>
        <li className="flex justify-between gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 cursor-pointer">
          <img src="" alt="" />
          <p className="text-sm tracking-wider text-gray-700 dark:text-gray-300">28.17&deg;</p>
          <p className="text-sm tracking-wider text-gray-700 dark:text-gray-300">Wednesday 22, Oct</p>
        </li>
        <li className="flex justify-between gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 cursor-pointer">
          <img src="" alt="" />
          <p className="text-sm tracking-wider text-gray-700 dark:text-gray-300">28.17&deg;</p>
          <p className="text-sm tracking-wider text-gray-700 dark:text-gray-300">Wednesday 22, Oct</p>
        </li>
        <li className="flex justify-between gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 cursor-pointer">
          <img src="" alt="" />
          <p className="text-sm tracking-wider text-gray-700 dark:text-gray-300">28.17&deg;</p>
          <p className="text-sm tracking-wider text-gray-700 dark:text-gray-300">Wednesday 22, Oct</p>
        </li>
      </ul>
    </div>
  );
};

export default WeeklyForecast;
