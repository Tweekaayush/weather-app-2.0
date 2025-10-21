import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: {
    currentWeather: {},
    dayForecast: [],
    hourlyForecast: [],
    pollutionDetails: [],
  },
  error: "",
};

export const getCurrentWeather = createAsyncThunk(
  "getCurrentWeather",
  async (payload, { rejectWithValue }) => {
    try {
      const { lat, lon } = payload;
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getForecast = createAsyncThunk(
  "getForecast",
  async (payload, { rejectWithValue }) => {
    try {
      const { lat, lon } = payload;
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );


      const dayForecast = []
      const hourlyForecast = []

      for(let i = 7; i<res.data.list.length; i+=8){
          dayForecast.push(res.data.list[i])
      }

      for(let i = 0; i<8; i+=1){
          hourlyForecast.push(res.data.list[i])
      }

      return {dayForecast, hourlyForecast};
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getAirPollutionDetails = createAsyncThunk(
  "getAirPollutionDetails",
  async (payload, { rejectWithValue }) => {
    try {
      const { lat, lon } = payload;
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCurrentWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.data.currentWeather = action.payload;
    });
    builder.addCase(getCurrentWeather.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getForecast.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getForecast.fulfilled, (state, action) => {
      state.loading = false;
      state.data.dayForecast = action.payload.dayForecast;
      state.data.hourlyForecast = action.payload.hourlyForecast;
    });
    builder.addCase(getForecast.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getAirPollutionDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAirPollutionDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data.pollutionDetails = action.payload.list;
    });
    builder.addCase(getAirPollutionDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default weatherSlice.reducer;
