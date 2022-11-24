import React from "react";
import { NavLink } from "react-router-dom";
import navbarCSS from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbarCSS.nav}>
      <div className={navbarCSS.item}>
        <NavLink to="/profile/:userId?" activeClassName={navbarCSS.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={navbarCSS.item}>
        <NavLink to="/dialogs" activeClassName={navbarCSS.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={navbarCSS.item}>
        <NavLink to="/news" activeClassName={navbarCSS.activeLink}>
          News
        </NavLink>
      </div>
      <div className={navbarCSS.item}>
        <NavLink to="/muisic" activeClassName={navbarCSS.activeLink}>
          Muisic
        </NavLink>
      </div>
      <div className={navbarCSS.item}>
        <NavLink to="/settings" activeClassName={navbarCSS.activeLink}>
          Settings
        </NavLink>
      </div>
      <div className={navbarCSS.item}>
        <NavLink to="/users" activeClassName={navbarCSS.activeLink}>
          Users
        </NavLink>
      </div>
      {/* <div className={navbarCSS.item}>
        <NavLink to="/login" activeClassName={navbarCSS.activeLink}>
          Login
        </NavLink>
      </div> */}
    </nav>
  );
};

export default Navbar;
