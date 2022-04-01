import styles from "./index.module.css";
import "swiper/css";
import "swiper/css/pagination";
import MovieCard from "../components/Cards/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopuler } from "../store/movieSlice";

export default function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopuler());
  }, [dispatch]);

  const state = useSelector((state) => state.movies);

  function tmdbGenreIdToName(id) {
    const genres = [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" },
    ];
    return genres.find((genre) => genre.id === id).name;
  }
  return (
    <>
      <div className={styles.slider}>
        {state.loading && <MovieCard />}
        {state.movies && (
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
            }}
            navigation={true}
          >
            {state.movies &&
              state.movies.results.slice(0, 4).map((movie) => (
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
        {state.movies &&
          state.movies.results
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
