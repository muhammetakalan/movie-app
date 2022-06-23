import styles from "./index.module.css";
import "swiper/css";
import MovieCard from "../components/Card/Movie";
import { tmdbGenreIdToName, getData } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

export default function Index({ movies }) {
  return (
    <>
      {movies && (
        <>
          <div className={styles.slider}>
            <Swiper
              breakpoints={{
                1400: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={25}
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {movies.results.slice(0, 5).map((movie, i) => (
                <SwiperSlide key={i}>
                  <a href={`/movie/${movie.id}`}>
                    <MovieCard
                      poster={`${process.env.TMDB_API_IMAGE_URL}/w780${movie.backdrop_path}`}
                      category={tmdbGenreIdToName(movie.genre_ids[0])}
                      rate={Math.round(movie.vote_average / 2)}
                      title={movie.title}
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="title">Filmler</div>
          <div className="card-list">
            {movies.results.slice(5).map((movie, i) => (
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
        </>
      )}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      movies: await getData("/discover/movie"),
    },
  };
}
