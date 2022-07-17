import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navMap from '@/constants/navMap';
import styles from './Navbar.module.scss';
import Hamburger from "@/components/Hamburger";

const NavBar = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const handleBurgerToggle = () => toggleMenu(!isMenuOpen);

  return (
    <>
      <nav className={styles.nav}>
        {navMap.map(({ paths, title }) => {
          return (
            <NavLink
              to={paths}
              key={title}
              className={({ isActive }) =>
                [
                  styles.link,
                  isActive ? styles.link_active : null,
                ].join(" ")
              }
            >
              {title}
            </NavLink>
          )
        })}
      </nav>

      <button
        className={styles.button}
        onClick={handleBurgerToggle}
      >
        <Hamburger
          isActive={isMenuOpen}
        />
      </button>
    </>
  )
}

export default NavBar;
