import styles from "./index.module.css";
import ReactPlaceholder from "react-placeholder";
import MovieCard from "../components/Card";
import { tmdbGenreIdToName } from "../utils";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../store/movieSlice";

import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  const { category } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(category));
  }, [dispatch, category]);

  const state = useSelector((state) => state.movie);

  return (
    <div className={styles.movie}>
      <div className={styles.title}>Movies</div>
      <div className={styles.movies}>
        {state.loading &&
          [...new Array(20)].map(() => {
            return <ReactPlaceholder type="rect" />;
          })}
        {state[category]?.results.map((movie) => (
          <MovieCard
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            category={tmdbGenreIdToName(movie.genre_ids[0])}
            rate={Math.round(movie.vote_average / 2)}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
