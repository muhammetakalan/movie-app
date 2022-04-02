import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopular = createAsyncThunk("fetchPopular", async (name) => {
  const response = await axios.get(
    `${process.env.TMDB_API_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  );
  return response.data;
});

export const fetchTopRated = createAsyncThunk("fetchTopRated", async (name) => {
  const response = await axios.get(
    `${process.env.TMDB_API_URL}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
  );
  return response.data;
});

export const fetchNowPlaying = createAsyncThunk(
  "fetchNowPlaying",
  async (name) => {
    const response = await axios.get(
      `${process.env.TMDB_API_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`
    );
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    loading: true,
  },
  extraReducers: {
    [fetchPopular.fulfilled]: (state, action) => {
      state.popular = action.payload;
      state.loading = false;
    },
    [fetchTopRated.fulfilled]: (state, action) => {
      state.topRated = action.payload;
      state.loading = false;
    },
    [fetchNowPlaying.fulfilled]: (state, action) => {
      state.nowPlaying = action.payload;
      state.loading = false;
    },
  },
});

export default movieSlice.reducer;
