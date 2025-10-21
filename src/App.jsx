import React from "react";
import Layout from "./components/Layout/Layout";
import CurrentWeather from "./components/CurrentWeather";
import WeatherHighlights from "./components/WeatherHighlights";
import WeeklyForecast from "./components/WeeklyForecast";
import HourlyForecast from "./components/HourlyForecast";

const App = () => {
  return (
    <Layout>
      <div className="container py-4 grid grid-cols-12 gap-4 dark:bg-transparent bg-gray-100">
        <div className='col-span-12 lg:col-span-3'>
          <CurrentWeather />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <WeatherHighlights />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <WeeklyForecast />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <HourlyForecast />
        </div>
      </div>
    </Layout>
  );
};

export default App;
