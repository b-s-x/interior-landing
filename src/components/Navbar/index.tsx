import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import navMap from '@/constants/navMap';
import styles from './Navbar.module.scss';
import Hamburger from "@/components/Hamburger";
import { useCurrentWidth } from '@/hooks/useCurrentWidth';

const NavBar = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const width = useCurrentWidth();

  const handleBurgerToggle = () => toggleMenu(!isMenuOpen);
  const isMobileWidth = width > 930;

  return (
    <>
      <nav className={
        [
          isMobileWidth ? styles.nav : styles.nav_not_active,
          isMenuOpen && styles.nav_active,
        ].join(" ")
      }>
        {navMap.map(({ paths, title }) => {
          return (
            <NavLink
              to={paths}
              key={title}
              className={({ isActive }) =>
                [
                  styles.link,
                  isActive && styles.link_active,
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
