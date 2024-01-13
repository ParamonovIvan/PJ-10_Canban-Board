import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Avatar } from '../../images/user-avatar.svg';
import Button from '../ui/button/Button';
import styles from './Navbar.module.scss';
import {ReactComponent as Arrow} from '../../images/arrow-down.svg';

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const rootRef = useRef<HTMLElement>(null)

  const toggleOpen = () => {
    setOpen(prev => !prev)
  }

  const links = ['Profile', 'Log Out']

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target instanceof Node && !rootRef.current?.contains(e.target)) {
        isOpen && 
        setOpen(false)
      }
    }

    window.addEventListener('click', handleClick)

     return () => {
       window.removeEventListener('click', handleClick);
     };
  }, [isOpen])

  return (
    <nav className={styles.nav} ref={rootRef}>
      <Button
        className={styles.nav__button}
        onClick={toggleOpen}
      >
        <Avatar className={styles.avatar}/>
        <Arrow className={isOpen ? styles.arrow_down : styles.arrow}/>
      </Button>
      <ul className={[
        styles.nav__menu,
        isOpen ? styles.nav__menu__open : ''
      ].filter(Boolean).join(' ')}>
        {links.map(link => <li key={link} className={styles.menu__li}><a className={styles.menu__link} href="/">{link}</a></li>)}
      </ul>
    </nav>
  )
}

export default Navbar