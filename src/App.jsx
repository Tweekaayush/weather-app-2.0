import React from "react";
import Layout from "./components/Layout/Layout";
import CurrentWeather from "./components/CurrentWeather";
import WeatherHighlights from "./components/WeatherHighlights";
import WeeklyForecast from "./components/WeeklyForecast";
import HourlyForecast from "./components/HourlyForecast";

const App = () => {
  return (
    <Layout>
      <CurrentWeather />
      <WeatherHighlights />
      <WeeklyForecast />
      <HourlyForecast />
    </Layout>
  );
};

export default App;
