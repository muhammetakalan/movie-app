import styles from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const path = useRouter().pathname;

  return (
    <div className={styles.navbar}>
      <Link href="/popular">
        <a className={path == "/popular" && styles.active}>Popüler</a>
      </Link>
      <Link href="/top-rated">
        <a className={path == "/top-rated" && styles.active}>En Beğenilen</a>
      </Link>
      <Link href="/now-playing">
        <a className={path == "/now-playing" && styles.active}>
          Şuanda Oynayan
        </a>
      </Link>
    </div>
  );
}
