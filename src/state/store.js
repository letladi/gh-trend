import { configureStore } from "@reduxjs/toolkit";
import trendsReducer from "./trendsSlice";

export const store = configureStore({
  reducer: {
    trends: trendsReducer,
  },
});
