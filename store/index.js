import movieReducer from "./movieSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
