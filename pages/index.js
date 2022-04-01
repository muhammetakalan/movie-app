import styles from "./index.module.css";
import MovieCard from "../components/Cards/MovieCard";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

export default function Index({ data }) {
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
          {[...Array(4)].map((x, i) => (
            <SwiperSlide>
              <MovieCard
                big
                category={tmdbGenreIdToName(data.results[i].genre_ids[0])}
                rate={Math.round(data.results[i].vote_average / 2)}
                title={data.results[i].title}
                poster={`https://image.tmdb.org/t/p/original${data.results[i].backdrop_path}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.movies}>
        {data.results.slice(4).map((movie) => (
          <MovieCard
            category={tmdbGenreIdToName(movie.genre_ids[0])}
            rate={Math.round(movie.vote_average / 2)}
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    `${process.env.TMDB_API_DOMAIN}/discover/movie?api_key=${process.env.TMDB_API_KEY}`
  );

  return { props: { data: await data.json() } };
}
