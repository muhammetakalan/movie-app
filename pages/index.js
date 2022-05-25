import styles from "./index.module.css";
import "swiper/css";
import "swiper/css/pagination";
import ReactPlaceholder from "react-placeholder";
import MovieCard from "../components/Card";
import { tmdbGenreIdToName } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../store/movieSlice";

export default function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies("popular"));
  }, [dispatch]);

  const state = useSelector((state) => state.movie);

  return (
    <>
      <div className={styles.slider}>
        {state.loading && <ReactPlaceholder type="rect" />}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {state.popular?.results.slice(0, 4).map((movie) => (
            <SwiperSlide>
              <MovieCard
                poster={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                category={tmdbGenreIdToName(movie.genre_ids[0])}
                rate={Math.round(movie.vote_average / 2)}
                title={movie.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.category}>
        <div className={styles.title}>Categories</div>
        <div className={styles.categories}>
          {[...new Array(6)].map(() => {
            return <ReactPlaceholder type="rect" />;
          })}
        </div>
      </div>
      <div className={styles.movie}>
        <div className={styles.title}>Movies</div>
        <div className={styles.movies}>
          {state.loading &&
            [...new Array(16)].map(() => {
              return <ReactPlaceholder type="rect" />;
            })}
          {state.popular?.results.slice(4).map((movie) => (
            <MovieCard
              poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              category={tmdbGenreIdToName(movie.genre_ids[0])}
              rate={Math.round(movie.vote_average / 2)}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
