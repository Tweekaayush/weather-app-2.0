import { Droplet, Moon, Sun, Wind } from "lucide-react";
import React from "react";

const WeatherHighlights = () => {
  return (
    <div className="card">
      <h1 className="heading-1">Today's Highlights</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="heading-2">Air Quality Index</h4>
            <p className="bg-red-500 text-white text-sm px-4 py-1 rounded-3xl">
              Very Poor
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Wind className="w-8 h-8 text-gray-800 dark:text-gray-200" />
            <ul className="flex justify-between gap-4 flex-1">
              <li className="flex-1 flex flex-col items-center">
                <h6 className="text-gray-700 dark:text-gray-300">
                  PM<sub>2.5</sub>
                </h6>
                <h3 className="heading-3">109</h3>
              </li>
              <li className="flex-1 flex flex-col items-center">
                <h6 className="text-gray-700 dark:text-gray-300">
                  PM<sub>2.5</sub>
                </h6>
                <h3 className="heading-3">109</h3>
              </li>
              <li className="flex-1 flex flex-col items-center">
                <h6 className="text-gray-700 dark:text-gray-300">
                  PM<sub>2.5</sub>
                </h6>
                <h3 className="heading-3">109</h3>
              </li>
              <li className="flex-1 flex flex-col items-center">
                <h6 className="text-gray-700 dark:text-gray-300">
                  PM<sub>2.5</sub>
                </h6>
                <h3 className="heading-3">109</h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col">
          <h4 className="heading-2 mb-4">sunrise & sunset</h4>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 flex items-center gap-4">
              <Sun className="w-8 h-8 text-gray-800 dark:text-gray-200" />
              <div>
                <h4 className="heading-2 mb-2.5">Sunrise</h4>
                <h3 className="heading-3">6:25 AM</h3>
              </div>
            </div>
            <div className="col-span-6 flex items-center gap-4">
              <Moon className="w-8 h-8 text-gray-800 dark:text-gray-200" />
              <div>
                <h4 className="heading-2 mb-2.5">Sunset</h4>
                <h3 className="heading-3">5:45 PM</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h4 className="heading-2 mb-4">Humidity</h4>
          <div className="flex justify-between items-center">
            <Droplet className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            <h3 className="heading-3">54%</h3>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h4 className="heading-2 mb-4">Humidity</h4>
          <div className="flex justify-between items-center">
            <Droplet className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            <h3 className="heading-3">54%</h3>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h4 className="heading-2 mb-4">Humidity</h4>
          <div className="flex justify-between items-center">
            <Droplet className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            <h3 className="heading-3">54%</h3>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h4 className="heading-2 mb-4">Humidity</h4>
          <div className="flex justify-between items-center">
            <Droplet className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            <h3 className="heading-3">54%</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHighlights;
