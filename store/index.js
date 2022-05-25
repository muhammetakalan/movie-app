import movieReducer from "./movieSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
