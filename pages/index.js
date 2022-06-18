import styles from "./index.module.css";
import "swiper/css";
import MovieCard from "../components/Card";
import { tmdbGenreIdToName, getData } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

export default function Index({ data }) {
  return (
    <>
      <div className={styles.slider}>
        <Swiper
          spaceBetween={25}
          slidesPerView={2}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {data?.results.slice(0, 4).map((movie) => (
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
      <div className={styles.category}>
        <div className={styles.title}>Kategoriler</div>
        <div className={styles.categories}>
          {[...new Array(4)].map(() => {
            return <img src="https://dummyimage.com/295x200/989898" />;
          })}
        </div>
      </div>
      <div className={styles.movie}>
        <div className={styles.title}>Filmler</div>
        <div className={styles.movies}>
          {data?.results.slice(4).map((movie) => (
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
    </>
  );
}

export async function getStaticProps() {
  return getData("/discover/movie");
}
