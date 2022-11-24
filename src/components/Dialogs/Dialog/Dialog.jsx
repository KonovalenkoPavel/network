import React from "react";
import { NavLink } from "react-router-dom";
import dialogsCSS from "./Dialog.module.css";

const Dialog = (props) => {
  return (
    <div>
      <div className={dialogsCSS.personLogo}>
        <img
          src="https://w7.pngwing.com/pngs/973/11/png-transparent-logo-phoenix-illustration-phoenix-logo-design-phoenix-illustration-free-logo-design-template-photography-orange.png"
          alt="logo"
        />

        <NavLink
          to={"/dialogs/" + props.id}
          className={dialogsCSS.dialog}
          activeClassName={dialogsCSS.activeLink}
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default Dialog;
