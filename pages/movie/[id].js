import styles from "./index.module.css";
import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";
import MovieCard from "../../components/Card/Movie";
import { tmdbGenreIdToName, getData } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { BiTime, BiFlag, BiCategory } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { SiImdb } from "react-icons/si";

export default function Movie({ movie, images, similar }) {
  return (
    <>
      {movie && images && similar && (
        <>
          <Head>
            <title>{movie.title}</title>
          </Head>
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
              {images.backdrops.slice(0, 4).map((movie, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={`${process.env.TMDB_API_IMAGE_URL}/w1280${movie.file_path}`}
                    alt="backdrop"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.overview}>{movie.overview}</p>
          <div className={styles.miniInfo}>
            {movie.genres.map((genre, i) => (
              <a key={i} href={`/category/${genre.id}`}>
                <BiCategory />
                {tmdbGenreIdToName(genre.id)}
              </a>
            ))}
            <span>
              <BsCalendarDate />
              {movie.release_date}
            </span>
            <span>
              <SiImdb />
              {movie.vote_average}/10
            </span>
            <span>
              <BiTime />
              {movie.runtime} Dakika
            </span>
            <span>
              <BiFlag />
              {movie.production_countries[0].name}
            </span>
          </div>
          <h2 className="title">Fragman</h2>
          <iframe
            className={styles.trailer}
            src={`https://www.youtube.com/embed/${movie.videos.results[0]?.key}`}
            allow="fullscreen"
          ></iframe>
          <h2 className="title">Benzerler</h2>
          <div className="card-list">
            {similar.results.slice(0, 10).map((movie, i) => (
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
