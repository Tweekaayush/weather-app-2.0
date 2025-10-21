import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {
    currentWeather: {},
    forcast: [],
    pollutionDetails: []
  },
  error: "",
};

const getCurrentWeather = createAsyncThunk('getCurrentWeather', async(payload, {rejectWithValue})=>{
    try {
        const {lat, lon} = payload
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const getForecast = createAsyncThunk('getForecast', async(payload, {rejectWithValue})=>{
    try {
        const {lat, lon} = payload
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})
const getAirPollutionDetails = createAsyncThunk('getAirPollutionDetails', async(payload, {rejectWithValue})=>{
    try {
        const {lat, lon} = payload
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(getCurrentWeather.pending, (state, action)=>{
        state.loading = true
    })
    builder.addCase(getCurrentWeather.fulfilled, (state, action)=>{
        state.loading = false
        state.currentWeather = action.payload        
    })
    builder.addCase(getCurrentWeather.rejected, (state, action)=>{
        state.loading = false
        state.error = action.payload
    })
    builder.addCase(getForecast.pending, (state, action)=>{
        state.loading = true
    })
    builder.addCase(getForecast.fulfilled, (state, action)=>{
        state.loading = false
        state.forecast = action.payload.list        
    })
    builder.addCase(getForecast.rejected, (state, action)=>{
        state.loading = false
        state.error = action.payload
    })
    builder.addCase(getAirPollutionDetails.pending, (state, action)=>{
        state.loading = true
    })
    builder.addCase(getAirPollutionDetails.fulfilled, (state, action)=>{
        state.loading = false
        state.pollutionDetails = action.payload.list        
    })
    builder.addCase(getAirPollutionDetails.rejected, (state, action)=>{
        state.loading = false
        state.error = action.payload
    })
  }
});

export default weatherSlice.reducer;
