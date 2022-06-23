import MovieCard from "../../components/Card/Movie";
import { tmdbGenreIdToName, getData } from "../../utils";

export default function Animation({ movies }) {
  return (
    <>
      {movies && (
        <div className="card-list">
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

export async function getStaticPaths() {
  return {
    paths: [{ params: { title: "title" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      movies: await getData("/search/movie", `query=${params.title}`),
    },
  };
}
