import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  world: [],
};
export const fetchWorldDataAsync = createAsyncThunk(
  "world/fetchWordDataAsync",
  async () => {
    const response = await axios.get("https://api.covid19api.com/summary");
    return response.data;
  }
);
export const WorldSlice = createSlice({
  name: "world",
  initialState,
  reducers: {
    removeWorldDataAsync: (state) => {
      state.world = {};
    },
  },
  extraReducers: {
    [fetchWorldDataAsync.fulfilled]: (state, { payload }) => {
      return { ...state, world: payload };
    },
  },
});

export const { removeWorldDataAsync } = WorldSlice.actions;
export default WorldSlice.reducer;
