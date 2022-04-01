import styles from "./MovieCard.module.css";
import "react-placeholder/lib/reactPlaceholder.css";
import ReactPlaceholder from "react-placeholder";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function MovieCard({ poster, category, rate, title }) {
  return (
    <div className={styles.card}>
      {title ? (
        <>
          <img className={styles.poster} src={poster} />
          <div className={styles.overlay}>
            <div className={styles.info}>
              <span className={styles.category}>{category}</span>
              <div className={styles.rate}>
                {[...new Array(5)].map((_, index) => {
                  return (
                    <>{index < rate ? <AiFillStar /> : <AiOutlineStar />}</>
                  );
                })}
              </div>
              <div className={styles.title}>{title}</div>
            </div>
          </div>
        </>
      ) : (
        <ReactPlaceholder
          type="rect"
          color="#696972"
          showLoadingAnimation={true}
        />
      )}
    </div>
  );
}
