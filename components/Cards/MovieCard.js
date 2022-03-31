import styles from "./MovieCard.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function MovieCard({
  big = false,
  category = "Diğer",
  rate = 0,
  title = "[İsim Getirilemedi]",
  poster = "https://dummyimage.com/200x300",
}) {
  return (
    <div className={styles.card}>
      <div className={big && styles.bigcard}>
        <img className={styles.poster} src={poster} />
        <div className={styles.overlay}>
          <div className={styles.info}>
            <span className={styles.category}>{category}</span>
            <div className={styles.rate}>
              {[...new Array(5)].map((_, index) => {
                return <>{index < rate ? <AiFillStar /> : <AiOutlineStar />}</>;
              })}
            </div>
            <div className={styles.title}>{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
