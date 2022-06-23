import MovieCard from "../components/Card/Movie";
import { tmdbGenreIdToName, getData } from "../utils";

export default function Popular({ movies }) {
  return (
    <>
      {movies && (
        <div className="card-list ">
          {movies.results.map((movie, i) => (
            <a key={i} href={`/movie/${movie.id}`}>
              <MovieCard
                poster={`${process.env.TMDB_API_IMAGE_URL}/w342${movie.poster_path}`}
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
      movies: await getData("/movie/popular"),
    },
  };
}
