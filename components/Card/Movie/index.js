import styles from "./index.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function MovieCard({ poster, category, rate, title }) {
  return (
    <div className={styles.card}>
      <img className={styles.poster} src={poster} />
      <div className={styles.overlay}>
        <div className={styles.info}>
          <span className={styles.category}>{category}</span>
          <div className={styles.rate}>
            {[...new Array(5)].map((_, index) => {
              return <>{index < rate ? <AiFillStar /> : <AiOutlineStar />}</>;
            })}
          </div>
          {title}
        </div>
      </div>
    </div>
  );
}
