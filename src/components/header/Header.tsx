import Navbar from '../navbar/Navbar';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header__wrapper}>
      <a href="/" className={styles.header__logo}>Awesome Kanban Board</a>
      <Navbar/>
    </header>
  )
}

export default Header