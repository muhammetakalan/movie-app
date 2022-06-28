import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function MovieCard({ href, poster, category, rate, title }) {
  return (
    <Link href={href}>
      <a>
        <div className={styles.card}>
          <Image
            className={styles.poster}
            src={poster}
            alt={title}
            layout="fill"
            placeholder="blur"
            blurDataURL={`/_next/image?url=${poster}&w=16&q=1`}
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
      </a>
    </Link>
  );
}
