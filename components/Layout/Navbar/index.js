import styles from "./index.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const path = router.query.category;

  return (
    <div className={styles.navbar}>
      <Link href="/popular">
        <a className={path == "popular" && styles.active}>Popular</a>
      </Link>
      <Link href="/top_rated">
        <a className={path == "top_rated" && styles.active}>Top Rated</a>
      </Link>
      <Link href="/now_playing">
        <a className={path == "now_playing" && styles.active}>Now Playing</a>
      </Link>
    </div>
  );
}
