import styles from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiCompass } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";
import {
  RiMovie2Fill,
  RiHomeFill,
  RiTimerFlashLine,
  RiSettings2Line,
} from "react-icons/ri";

export default function LeftSide() {
  const path = useRouter().pathname;

  return (
    <div className={styles.leftside}>
      <Link href="/">
        <a className={styles.logo}>
          <RiMovie2Fill color="#d22f27" />
          Movie App
        </a>
      </Link>
      <div className={styles.nav}>
        <div className={styles.title}>MENÜ</div>
        <Link href="/">
          <a className={path == "/" && styles.active}>
            <RiHomeFill />
            Ana Sayfa
          </a>
        </Link>
        <Link href="/discovery">
          <a className={path == "/discovery" && styles.active}>
            <BiCompass />
            Keşfet
          </a>
        </Link>
        <Link href="/coming-soon">
          <a className={path == "/coming-soon" && styles.active}>
            <RiTimerFlashLine />
            Çok Yakında
          </a>
        </Link>
      </div>
      <div className={styles.nav}>
        <div className={styles.title}>DİĞER</div>
        <Link href="/settings">
          <a className={path == "/settings" && styles.active}>
            <RiSettings2Line />
            Ayarlar
          </a>
        </Link>
        <Link href="/">
          <a>
            <IoLogInOutline />
            Giriş Yap
          </a>
        </Link>
      </div>
    </div>
  );
}
