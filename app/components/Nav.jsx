"use client";

import React from "react";
import Image from "next/image";
import NAV_LOGO from "../assets/nav-logo.svg";
import MENU_ICON from "../assets/nav-menu-icon.svg";

const Nav = () => {
  return (
    <nav className="Nav">
      <a href="/" className="nav-link">
        {" "}
        <Image src={NAV_LOGO} className="nav-logo" />
      </a>
      <a
        href="#"
        onClick={() => console.log("open sidebar menu")}
        className="menu-btn"
      >
        MENU
        <Image src={MENU_ICON} className="menu-btn-icon" />
      </a>
    </nav>
  );
};

export default Nav;
