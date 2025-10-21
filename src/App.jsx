import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import CurrentWeather from "./components/CurrentWeather";
import WeatherHighlights from "./components/WeatherHighlights";
import WeeklyForecast from "./components/WeeklyForecast";
import HourlyForecast from "./components/HourlyForecast";
import { useDispatch } from "react-redux";
import { getAirPollutionDetails, getCurrentWeather, getForecast } from "./slices/weatherSlice";

const App = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCurrentWeather({lat: 28.6139,
        lon: 77.2088}))
    dispatch(getAirPollutionDetails({lat: 28.6139,
        lon: 77.2088}))
    dispatch(getForecast({lat: 28.6139,
        lon: 77.2088}))
  }, [])
  return (
    <Layout>
      <div className="container py-4 grid grid-cols-12 gap-4 dark:bg-transparent bg-gray-100 min-h-screen">
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
          <CurrentWeather />
          <WeeklyForecast />
        </div>
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-4">
          <WeatherHighlights />
          <HourlyForecast />
        </div>
      </div>
    </Layout>
  );
};

export default App;
