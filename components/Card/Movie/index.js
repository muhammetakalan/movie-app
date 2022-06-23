import styles from "./index.module.css";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function MovieCard({ poster, category, rate, title }) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.poster}
        src={poster}
        alt="poster"
        layout="fill"
        placeholder="blur"
        blurDataURL
      />
      <div className={styles.overlay}>
        <div className={styles.info}>
          <span className={styles.category}>{category}</span>
          <div className={styles.rate}>
            {[...new Array(5)].map((_, i) => {
              return (
                <span key={i}>
                  {i < rate ? <AiFillStar /> : <AiOutlineStar />}
                </span>
              );
            })}
          </div>
          {title}
        </div>
      </div>
    </div>
  );
}
