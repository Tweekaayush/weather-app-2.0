import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../slices/weather.slice";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
