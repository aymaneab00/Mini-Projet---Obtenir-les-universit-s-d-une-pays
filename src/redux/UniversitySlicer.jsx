import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUniversities = createAsyncThunk(
  "universities/getuniversities",
  async () => {
    const res = await axios.get(
      "http://universities.hipolabs.com/search?country="
    );
    return res.data;
  }
);

const UniversitiesSlice = createSlice({
  name: "universities",
  initialState: {
    Data: [],
    loading: false,
    error: null,
    selectedCountry: -1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUniversities.fulfilled,(state,action)=>{
        state.Data= action.payload
    })
  },
});
export const {} = UniversitiesSlice.actions;
export default UniversitiesSlice.reducer;