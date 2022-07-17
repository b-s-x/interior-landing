import React from "react";
import { NavLink } from 'react-router-dom';
import { paths } from '@/constants/routes';
import styles from './Navbar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to={ paths.home }
        className={({ isActive }) =>
          [
            styles.link,
            isActive ? styles.link_active : null,
          ].join(" ")
        }
      >
        Home
      </NavLink>
      <NavLink
        to={ paths.about }
        className={({ isActive }) =>
          [
            styles.link,
            isActive ? styles.link_active : null,
          ].join(" ")
        }
      >
        About Us
      </NavLink>
      <NavLink
        to={ paths.services }
        className={({ isActive }) =>
          [
            styles.link,
            isActive ? styles.link_active : null,
          ].join(" ")
        }
      >
        Services
      </NavLink>
      <NavLink
        to={ paths.pages }
        className={({ isActive }) =>
          [
            styles.link,
            isActive ? styles.link_active : null,
          ].join(" ")
        }
      >
        Pages
      </NavLink>
      <NavLink
        to={ paths.contacts }
        className={({ isActive }) =>
          [
            styles.link,
            isActive ? styles.link_active : null,
          ].join(" ")
        }
      >
        Contact Us
      </NavLink>
    </nav>
  )
}

export default NavBar;
