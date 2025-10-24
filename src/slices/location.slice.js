import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: {
    placeList: [],
  },
  error: "",
};

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

const locationSlice = createSlice({
  name: location,
  initialState,
  reducers: {
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
  },
});

export const { clearPlaceList } = locationSlice.actions;

export default locationSlice.reducer;
