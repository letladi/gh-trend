import { configureStore } from "@reduxjs/toolkit";
import trendsReducer from "../features/trends/trendsSlice";

export const store = configureStore({
  reducer: {
    trends: trendsReducer,
  },
});
