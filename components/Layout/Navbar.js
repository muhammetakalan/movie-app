import styles from "./Navbar.module.css";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className={styles.navbar}>
      <div className={path == "/" && styles.active}>Popular</div>
      <div className={path == "#" && styles.active}>Top Rated</div>
      <div className={path == "#" && styles.active}>Upcoming</div>
      <div className={path == "#" && styles.active}>Now Playing</div>
    </div>
  );
}
