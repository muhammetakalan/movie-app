import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopuler = createAsyncThunk("fetchPopuler", async () => {
  const response = await axios.get(
    `${process.env.TMDB_API_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  );
  return response.data;
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    loading: true,
  },
  extraReducers: {
    [fetchPopuler.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
  },
});

export default movieSlice.reducer;
