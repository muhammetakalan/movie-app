import styles from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiCompass } from "react-icons/bi";
import { CgMediaLive } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import {
  RiMovie2Fill,
  RiHomeFill,
  RiTimerFlashLine,
  RiUserLine,
  RiSettings2Line,
} from "react-icons/ri";

export default function LeftSide() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className={styles.leftside}>
      <Link href="/">
        <a className={styles.logo}>
          <RiMovie2Fill color="#d22f27" />
          Exxmon
        </a>
      </Link>
      <div className={styles.nav}>
        <div className={styles.title}>MENU</div>
        <Link href="/">
          <a className={path == "/" && styles.active}>
            <RiHomeFill />
            Home
          </a>
        </Link>
        <Link href="/discovery">
          <a className={path == "/discovery" && styles.active}>
            <BiCompass />
            Discovery
          </a>
        </Link>
        <Link href="/">
          <a className={path == "#" && styles.active}>
            <RiTimerFlashLine />
            Coming Soon
          </a>
        </Link>
      </div>
      <div className={styles.nav}>
        <div className={styles.title}>GENERAL</div>
        <Link href="/">
          <a className={path == "#" && styles.active}>
            <RiUserLine />
            Friends
          </a>
        </Link>
        <Link href="/">
          <a className={path == "#" && styles.active}>
            <CgMediaLive />
            Media
          </a>
        </Link>
      </div>
      <div className={styles.nav}>
        <div className={styles.title}>SOCIAL</div>
        <Link href="/">
          <a className={path == "#" && styles.active}>
            <RiSettings2Line />
            Settings
          </a>
        </Link>
        <Link href="/">
          <a className={path == "#" && styles.active}>
            <IoLogOutOutline />
            Log Out
          </a>
        </Link>
      </div>
    </div>
  );
}
