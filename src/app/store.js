import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../slices/weather.slice";
import locationReducer from "../slices/location.slice";

const rootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
