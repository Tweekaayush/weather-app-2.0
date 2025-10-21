import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeather } from "../slices/weatherSlice";

const CurrentWeather = () => {
  const dispatch = useDispatch();
  const {
    loading,
    data: { currentWeather },
  } = useSelector((state) => state.weather);
  return (
    <div className="card">
      <h1 className="heading">Now</h1>
    </div>
  );
};

export default CurrentWeather;
