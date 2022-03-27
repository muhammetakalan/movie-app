import styles from "./layout.module.css";

import LeftSide from "./left-side";
import RightSide from "./right-side";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <LeftSide />
      <main className={styles.content}>{children}</main>
      <RightSide />
    </div>
  );
}
