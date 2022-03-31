import styles from "./index.module.css";
import MovieCard from "../components/Cards/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

export default function Index({ data }) {
  function tmdbGenreIdToName(id) {
    const genres = [
      { id: 28, name: "Aksiyon" },
      { id: 12, name: "Macera" },
      { id: 16, name: "Animasyon" },
      { id: 35, name: "Komedi" },
      { id: 80, name: "Suç" },
      { id: 99, name: "Belgesel" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Aile" },
      { id: 14, name: "Fantezi" },
      { id: 36, name: "Geçmiş" },
      { id: 27, name: "Korku" },
      { id: 10402, name: "Müzik" },
      { id: 9648, name: "Gizem" },
      { id: 10749, name: "Romantik" },
      { id: 878, name: "Bilim Kurgu" },
      { id: 10770, name: "TV Filmi" },
      { id: 53, name: "Gerilim" },
      { id: 10752, name: "Savaş" },
      { id: 37, name: "Batı" },
    ];
    return genres.find((genre) => genre.id === id).name;
  }

  return (
    <>
      <div className={styles.bigcard}>
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
      <div className={styles.minicards}>
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
