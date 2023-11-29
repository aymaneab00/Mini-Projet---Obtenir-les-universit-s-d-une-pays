import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CountrySlice from "./CountrySlice";
import UniversitySlicer from "./UniversitySlicer";

const reducer  = combineReducers(
    {
        countries :CountrySlice,
        universities : UniversitySlicer
    }
)
const store = configureStore({
    reducer
})
export default store 