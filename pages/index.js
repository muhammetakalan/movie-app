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
              {movies.results.slice(0, 5).map((movie) => (
                <SwiperSlide>
                  <a href={`/movie/${movie.id}`}>
                    <MovieCard
                      poster={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      category={tmdbGenreIdToName(movie.genre_ids[0])}
                      rate={Math.round(movie.vote_average / 2)}
                      title={movie.title}
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="title">Kategoriler</div>
          <div className={styles.category}>
            <div className="card-list">
              <a href="category/878">
                <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/5C3RriLKkIAQtQMx85JLtu4rVI2.jpg" />
              </a>
              <a href="category/28">
                <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7py8kUCYaOdFn1TfVS87BDBySOz.jpg" />
              </a>
              <a href="category/16">
                <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7LuYujytHPCwS6ZKreKacmTSkyf.jpg" />
              </a>
              <a href="category/18">
                <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg" />
              </a>
              <a href="category/10749">
                <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dZq7ukBIcHxpD7rumuS0eiXfdxe.jpg" />
              </a>
            </div>
          </div>
          <div className="title">Filmler</div>
          <div className="card-list">
            {movies.results.slice(5).map((movie) => (
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
