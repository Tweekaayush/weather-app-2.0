import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import CurrentWeather from "./components/CurrentWeather";
import WeatherHighlights from "./components/WeatherHighlights";
import WeeklyForecast from "./components/WeeklyForecast";
import HourlyForecast from "./components/HourlyForecast";
import { useDispatch, useSelector } from "react-redux";
import {
  getAirPollutionDetails,
  getCurrentWeather,
  getForecast,
} from "./slices/weather.slice";
import { getMyLocation, getLocationDetails } from "./slices/location.slice";

const App = () => {
  const dispatch = useDispatch();
  const {
    data: { lat, lon },
  } = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(getLocationDetails({ lat, lon }));
    dispatch(getCurrentWeather({ lat, lon }));
    dispatch(getAirPollutionDetails({ lat, lon }));
    dispatch(getForecast({ lat, lon }));
  }, [lat, lon]);

  useEffect(() => {
    dispatch(getMyLocation());
  }, []);
  return (
    <Layout>
      <div className="container mt-4 py-4 grid grid-cols-12 gap-4 dark:bg-transparent bg-gray-100">
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <CurrentWeather />
          <WeeklyForecast />
        </div>
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          <WeatherHighlights />
          <HourlyForecast />
        </div>
      </div>
    </Layout>
  );
};

export default App;
