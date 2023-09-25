import { tmdbGenreIdToName, getData } from '../../utils'
import MovieCard from '../../components/Card/Movie'

export default function Animation({ movies }) {
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

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '878' } }],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      movies: await getData('/discover/movie', `with_genres=${params.id}`)
    }
  }
}
