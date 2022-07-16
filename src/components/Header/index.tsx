import React from "react";
import InteriorIcon from '@/icons/Interior';
import Navbar from './components/Navbar';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
        <Navbar />
    </div>
  )
}

export default Header;

{/* <InteriorIcon
        className={styles.icon_interior}
      /> */}