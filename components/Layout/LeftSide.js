import styles from "./LeftSide.module.css";
import Link from "next/link";
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
  return (
    <div className={styles.leftside}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>
            <RiMovie2Fill color="#d22f27" />
            Exxmon
          </a>
        </Link>
        <div className={styles.nav}>
          <div className={styles.title}>MENU</div>
          <Link href="/">
            <a>
              <RiHomeFill />
              Home
            </a>
          </Link>
          <Link href="/discovery">
            <a>
              <BiCompass />
              Discovery
            </a>
          </Link>
          <Link href="/">
            <a>
              <RiTimerFlashLine />
              Coming Soon
            </a>
          </Link>
        </div>
        <div className={styles.nav}>
          <div className={styles.title}>GENERAL</div>
          <Link href="/">
            <a>
              <RiUserLine />
              Friends
            </a>
          </Link>
          <Link href="/">
            <a>
              <CgMediaLive />
              Media
            </a>
          </Link>
        </div>
        <div className={styles.nav}>
          <div className={styles.title}>SOCIAL</div>
          <Link href="/">
            <a>
              <RiSettings2Line />
              Settings
            </a>
          </Link>
          <Link href="/">
            <a>
              <IoLogOutOutline />
              Log Out
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
