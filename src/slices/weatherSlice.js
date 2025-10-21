import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
});

export default weatherSlice.reducer;
