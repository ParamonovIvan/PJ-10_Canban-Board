import { ReactNode } from 'react';
import styles from './Layout.module.scss';

interface LayoutProps {
  HeaderComponent: ReactNode,
  ContentComponent: ReactNode,
  FooterComponent: ReactNode
}

const Layout = ({ HeaderComponent, ContentComponent, FooterComponent }: LayoutProps) => {
  return (
    <div className={styles.layout__wrapper}>
      {HeaderComponent}
      {ContentComponent}
      {FooterComponent}
    </div>
  )
}

export default Layout