import { useContext } from 'react';
import styles from './Footer.module.scss';
import { FormDataContext } from '../../context/form-data-context';
import { FormName } from '../../context/types';

const Footer = () => {
  const {tasks} = useContext(FormDataContext)
  const backlog = tasks.filter(task => task.list === FormName.Backlog)
  const finished = tasks.filter(task => task.list === FormName.Finished)

  const year = new Date().getFullYear()
    
  return(
    <footer className={styles.footer__wrapper}>
      <span className={styles.footer__leftbar}>Active tasks: {backlog.length}</span>
      <span className={styles.footer__leftbar}>Finished tasks: {finished.length}</span>
      <span className={styles.footer__rightbar}>Kanban board by Ivan, {year}</span>
    </footer>
  )
}

export default Footer