import styles from "./index.module.css";
import MovieCard from "../components/Cards/MovieCard";
import { tmdbGenreIdToName } from "../utils";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNowPlaying } from "../store/movieSlice";

export default function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, [dispatch]);

  const state = useSelector((state) => state.movies);

  return (
    <div className={styles.movies}>
      {state.loading &&
        [...new Array(12)].map(() => {
          return <MovieCard />;
        })}
      {state.nowPlaying &&
        state.nowPlaying.results.map((movie) => (
          <MovieCard
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            category={tmdbGenreIdToName(movie.genre_ids[0])}
            rate={Math.round(movie.vote_average / 2)}
            title={movie.title}
          />
        ))}
    </div>
  );
}
