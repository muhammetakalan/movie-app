import styles from "./index.module.css";
import "swiper/css";
import "swiper/css/pagination";
import MovieCard from "../../components/Card";
import { tmdbGenreIdToName, getData } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

export default function Movie({ movie, images, similar }) {
  return (
    // TODO : VERİ KONTROLÜ YAP
    <>
      <div className={styles.slider}>
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
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
          {images?.backdrops.map((movie) => (
            <SwiperSlide>
              <div className={styles.poster}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.file_path}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{movie?.title}</h1>
        <p className={styles.overview}>{movie?.overview}</p>
      </div>
      <h1>Fragman</h1>
      <iframe
        className={styles.iframe}
        src={`https://www.youtube.com/embed/${movie?.videos.results[0].key}`}
      ></iframe>
      <h1>Benzerler</h1>
      <div className={styles.movies}>
        {similar?.results.slice(0, 10).map((movie) => (
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
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "338953" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      movie: await getData(`/movie/${params.id}`, "append_to_response=videos"),
      images: await getData(
        `/movie/${params.id}/images`,
        "include_image_language=null"
      ),
      similar: await getData(`/movie/${params.id}/similar`),
    },
  };
}
