import styles from "./index.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import {
  RiMovie2Fill,
  RiHomeFill,
  RiCompass3Line,
  RiHeartLine,
  RiSettings2Line,
  RiLogoutBoxLine,
  RiLoginBoxLine,
} from "react-icons/ri";

export default function LeftSide() {
  const { data: session } = useSession();
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
          <a className={path == "/" ? "active" : ""}>
            <RiHomeFill />
            Ana Sayfa
          </a>
        </Link>
        <Link href="/discovery">
          <a className={path == "/discovery" ? "active" : ""}>
            <RiCompass3Line />
            Keşfet
          </a>
        </Link>
        {session && (
          <Link href="/saved">
            <a className={path == "/saved" ? "active" : ""}>
              <RiHeartLine />
              Kaydedilen
            </a>
          </Link>
        )}
      </div>
      <div className={styles.nav}>
        <div className={styles.title}>DİĞER</div>
        <Link href="/settings">
          <a className={path == "/settings" ? "active" : ""}>
            <RiSettings2Line />
            Ayarlar
          </a>
        </Link>
        {session ? (
          <span onClick={() => signOut()}>
            <img src={session.user.image} alt="avatar" />
            Çıkış Yap
          </span>
        ) : (
          <span onClick={() => signIn()}>
            <RiLoginBoxLine />
            Giriş Yap
          </span>
        )}
      </div>
    </div>
  );
}
