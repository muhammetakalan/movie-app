import styles from "./index.module.css";
import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import MovieCard from "../../components/Card/Movie";
import { tmdbGenreIdToName, getData } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { BiTime, BiFlag, BiCategory } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { SiImdb } from "react-icons/si";

export default function Movie({ movie, images, recommendations }) {
  return (
    <>
      {movie && images && recommendations && (
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
              {images.backdrops.map((backdrop, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={`${process.env.TMDB_API_IMAGE_URL}/w1280${backdrop.file_path}`}
                    alt={movie.title}
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={`/_next/image?url=${process.env.TMDB_API_IMAGE_URL}/w1280${backdrop.file_path}&w=16&q=1`}
                    unoptimized
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.overview}>{movie.overview}</p>
          <div className={styles.miniInfo}>
            {movie.genres.map((genre, i) => (
              <Link key={i} href={`/category/${genre.id}`}>
                <a>
                  <BiCategory />
                  {tmdbGenreIdToName(genre.id)}
                </a>
              </Link>
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
            title={movie.title}
            className={styles.trailer}
            src={`https://www.youtube.com/embed/${movie.videos.results[0]?.key}`}
            allow="fullscreen"
          ></iframe>
          <h2 className="title">Öneriler</h2>
          <div className="card-list">
            {recommendations.results.slice(0, 10).map((movie, i) => (
              <MovieCard
                key={i}
                href={`/movie/${movie.id}`}
                poster={`${process.env.TMDB_API_IMAGE_URL}/w342${movie.poster_path}`}
                category={tmdbGenreIdToName(movie.genre_ids[0])}
                rate={Math.round(movie.vote_average / 2)}
                title={movie.title}
              />
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
      recommendations: await getData(`/movie/${params.id}/recommendations`),
    },
  };
}
