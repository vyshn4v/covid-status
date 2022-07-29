import { configureStore } from "@reduxjs/toolkit";
import StateSlice from "../features/stateWise/StateSlice";
import WorldSlice from "../features/world/WorldSlice";
// import stateWiseReducer from '../features/stateWise/StateSlice'
export const store = configureStore({
  reducer: {
    stateWise: StateSlice,
    districtWise: StateSlice,
    world: WorldSlice,
  },
});
