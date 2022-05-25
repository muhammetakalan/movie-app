import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("fetchMovies", async (category) => {
  const response = await axios.get(
    `${process.env.TMDB_API_URL}/movie/${category}?api_key=${process.env.TMDB_API_KEY}`
  );

  return response.data;
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    loading: true,
  },
  extraReducers: {
    [fetchMovies.fulfilled]: (state, action) => {
      state[action.meta.arg] = action.payload;
      state.loading = false;
    },
  },
});

export default movieSlice.reducer;
