import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  stateWise: [],
  districtWise: [],
};

export const fetchStatewiseAsync = createAsyncThunk(
  "covid19/fetchStatewiseAsync",
  async () => {
    const response = await axios.get(
      "https://data.covid19india.org/state_district_wise.json"
    );
    return response.data;
  }
);
export const fetchDistrictWiseAsync = createAsyncThunk(
  "covid19/fetchDistrictWiseAsync",
  async (stateName) => {
    const response = await axios.get(
      "https://data.covid19india.org/state_district_wise.json"
    );
    return response.data[stateName].districtData;
  }
);
export const stateWiseSlice = createSlice({
  name: "covid19",
  initialState,
  reducers: {
    removeStatewiseAsync: (state) => {
      state.stateWise = {};
    },
    removeWorldWiseAsync: (state) => {
      state.stateWise = {};
    },
  },
  extraReducers: {
    [fetchStatewiseAsync.fulfilled]: (state, { payload }) => {
      return { ...state, stateWise: payload };
    },
    [fetchDistrictWiseAsync.fulfilled]: (state, { payload }) => {
      return { ...state, districtWise: payload };
    },
  },
});

export const { removeStatewiseAsync,removeWorldWiseAsync } = stateWiseSlice.actions;

export default stateWiseSlice.reducer;
