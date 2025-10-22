import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: {
    lat: 28.6139,
    lon: 77.2088,
    location: { city: "", country: "" },
    placeList: [],
    currentWeather: {},
    dayForecast: [],
    hourlyForecast: [],
    pollutionDetails: [],
  },
  error: "",
};

export const getCurrentWeather = createAsyncThunk(
  "getCurrentWeather",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const { lat, lon } = payload;
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      dispatch(clearPlaceList());
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

      const dayForecast = [];
      const hourlyForecast = [];

      for (let i = 7; i < res.data.list.length; i += 8) {
        dayForecast.push(res.data.list[i]);
      }

      for (let i = 0; i < 8; i += 1) {
        hourlyForecast.push(res.data.list[i]);
      }

      return { dayForecast, hourlyForecast };
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

export const geo = createAsyncThunk(
  "geo",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${payload}&limit=5&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getLocationDetails = createAsyncThunk(
  "getLocationDetails",
  async (payload, { rejectWithValue }) => {
    try {
      const { lat, lon } = payload;
      const res = await axios.get(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getMyLocation = createAsyncThunk(
  "getMyLocation",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://api.ipify.org/?format=json");
      const resp = await axios.get(
        `https://ipinfo.io/${res.data?.ip}?token=c177813f87d9fa`
      );

      const [latitude, longitude] = resp.data.loc.split(",");

      return { lat: latitude, lon: longitude };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.data.lat = action.payload.lat;
      state.data.lon = action.payload.lon;
    },
    clearPlaceList: (state, action) => {
      state.data.placeList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(geo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(geo.fulfilled, (state, action) => {
      state.loading = false;
      state.data.placeList = action.payload;
    });
    builder.addCase(geo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getLocationDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getLocationDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data.location.city = action.payload[0].name;
      state.data.location.country = action.payload[0].country;
    });
    builder.addCase(getLocationDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getMyLocation.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMyLocation.fulfilled, (state, action) => {
      state.loading = false;
      state.data.lat = action.payload.lat;
      state.data.lon = action.payload.lon;
    });
    builder.addCase(getMyLocation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
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

export const { setLocation, clearPlaceList } = weatherSlice.actions;

export default weatherSlice.reducer;
