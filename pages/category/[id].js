import styles from "../index.module.css";
import MovieCard from "../../components/Card";
import { tmdbGenreIdToName, getData } from "../../utils";

export default function Animation({ data }) {
  return (
    <div className={styles.movie}>
      <div className={styles.movies}>
        {data?.results.map((movie) => (
          <a href={`/movie/${movie.id}`}>
            <MovieCard
              poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              category={tmdbGenreIdToName(movie.genre_ids[0])}
              rate={Math.round(movie.vote_average / 2)}
              title={movie.title}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "878" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return getData("/discover/movie", `with_genres=${params.id}`);
}
