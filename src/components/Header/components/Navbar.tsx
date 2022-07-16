import React from "react";
import { Link } from "react-router-dom";
import { paths } from '@/constants/routes';

const NavBar = () => {
  return (
    <nav>
      <Link to={ paths.home }> Home</Link>
      <Link to={ paths.about }> About Us</Link>
      <Link to={ paths.services }> Services</Link>
      <Link to={ paths.pages }>Pages</Link>
      <Link to={ paths.contacts }>Contact Us</Link>
    </nav>
  )
}

export default NavBar;
