import styles from './index.module.css'
import LeftSide from './LeftSide'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <LeftSide />
      <main className={styles.content}>
        <Navbar />
        {children}
      </main>
    </div>
  )
}
