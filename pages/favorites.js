import { useState, useEffect } from 'react'

import { tmdbGenreIdToName } from '../utils'
import MovieCard from '../components/Card/Movie'

export default function Saved() {
  const [movies, setMovies] = useState()

  useEffect(() => {
    if (!movies) {
      setMovies(JSON.parse(localStorage.getItem('movies')))
    }
  })

  return movies ? (
    <div className="card-list">
      {movies.reverse().map((movie, i) => (
        <MovieCard
          key={i}
          href={`/movie/${movie.id}`}
          poster={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          category={tmdbGenreIdToName(movie.genres[0].id)}
          rate={Math.round(movie.vote_average / 2)}
          title={movie.title}
        />
      ))}
    </div>
  ) : (
    <p style={{ textAlign: 'center', fontSize: '32px' }}>
      Henüz herhangi bir film beğenmediniz
    </p>
  )
}
