import styles from "./Layout.module.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <LeftSide />
      <main className={styles.content}>{children}</main>
      <RightSide />
    </div>
  );
}
