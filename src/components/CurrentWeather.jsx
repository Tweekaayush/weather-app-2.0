import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeather } from "../slices/weatherSlice";
import { Calendar, MapPin } from "lucide-react";

const CurrentWeather = () => {
  const dispatch = useDispatch();
  const {
    loading,
    data: { currentWeather },
  } = useSelector((state) => state.weather);
  return (
    <div className="card">
      <h1 className="heading-1">Now</h1>
      <div className="flex mb-4">
        <h2 className="text-6xl text-gray-700 dark:text-gray-200">
          28.07°<sup>c</sup>
        </h2>
        <div className="flex items-center justify-center">
          <img src="" alt="" />
        </div>
      </div>
      <h3 className="pb-4 mb-5 text-gray-600 dark:text-gray-400 border-b border-gray-400 dark:border-gray-600">smoke</h3>
      <div className="flex gap-4 mb-2 text-gray-800 dark:text-gray-200">
        <Calendar className="w-5 h-5"/>
        <p>Tuesday 21, Oct</p>
      </div>
      <div className="flex gap-4 text-gray-800 dark:text-gray-200">
        <MapPin className="w-5 h-5"/>
        <p>New Delhi, IN</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
