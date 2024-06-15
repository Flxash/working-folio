import { memo } from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
          Abdel Yasser
        <div className={styles.content}></div>
      </div>
    </nav>
  )
}

Header.displayName = 'Header'
export default memo(Header)
