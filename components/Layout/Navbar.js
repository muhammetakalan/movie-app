import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={path == "/" && styles.active}>Popular</a>
      </Link>
      <Link href="/topRated">
        <a className={path == "/topRated" && styles.active}>Top Rated</a>
      </Link>
      <Link href="/nowPlaying">
        <a className={path == "/nowPlaying" && styles.active}>Now Playing</a>
      </Link>
    </div>
  );
}
