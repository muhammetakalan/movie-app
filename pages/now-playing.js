import MovieCard from "../components/Card/Movie";
import { tmdbGenreIdToName, getData } from "../utils";

export default function NowPlaying({ movies }) {
  return (
    <>
      {movies && (
        <div className="grid-list">
          {movies.results.map((movie) => (
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
      )}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      movies: await getData("/movie/now_playing"),
    },
  };
}
