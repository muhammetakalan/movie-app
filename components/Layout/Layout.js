import styles from "./Layout.module.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <LeftSide />
      <main className={styles.content}>
        <Navbar />
        {children}
      </main>
      <RightSide />
    </div>
  );
}
