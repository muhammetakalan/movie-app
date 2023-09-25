import MovieCard from '../components/Card/Movie'
import { tmdbGenreIdToName, getData } from '../utils'

export default function Upcoming({ movies }) {
  return (
    movies && (
      <div className="card-list">
        {movies.results.map((movie, i) => (
          <MovieCard
            key={i}
            href={`/movie/${movie.id}`}
            poster={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            category={tmdbGenreIdToName(movie.genre_ids[0])}
            rate={Math.round(movie.vote_average / 2)}
            title={movie.title}
          />
        ))}
      </div>
    )
  )
}

export async function getStaticProps() {
  return {
    props: {
      movies: await getData('/movie/upcoming')
    }
  }
}
