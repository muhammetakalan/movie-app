import styles from "./index.module.css";
import "swiper/css";
import "swiper/css/pagination";
import MovieCard from "../components/Cards/MovieCard";
import { tmdbGenreIdToName } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopular } from "../store/movieSlice";

export default function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  const state = useSelector((state) => state.movies);

  return (
    <>
      <div className={styles.slider}>
        {state.loading && <MovieCard />}
        {state.popular && (
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
            {state.popular &&
              state.popular.results.slice(0, 4).map((movie) => (
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
        )}
      </div>
      <div className={styles.movies}>
        {state.loading &&
          [...new Array(12)].map(() => {
            return <MovieCard />;
          })}
        {state.popular &&
          state.popular.results
            .slice(4)
            .map((movie) => (
              <MovieCard
                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                category={tmdbGenreIdToName(movie.genre_ids[0])}
                rate={Math.round(movie.vote_average / 2)}
                title={movie.title}
              />
            ))}
      </div>
    </>
  );
}
