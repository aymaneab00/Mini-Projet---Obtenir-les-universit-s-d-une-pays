import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk(
  "countries/getcountries",
  async () => {
    const res = await axios.get("https://restcountries.com/v3.1/all");
    return res.data;
  }
);
const CountriesSlicer = createSlice({
  name: "countries",
  initialState: {
    data: [],
    loading: false,
    error: null,
    selectedCountry: "",
  },
  reducers: {
    modifier : (state,action)=>{
        state.selectedCountry = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => {
     state.data = action.payload   

    });
  },
})
export const {modifier} = CountriesSlicer.actions;
export default CountriesSlicer.reducer;