"use client";

import React, { useState } from "react";
import Image from "next/image";
import NAV_LOGO from "../assets/nav-logo.svg";
import MENU_ICON from "../assets/nav-menu-icon.svg";
import Sidebar from "./Sidebar";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Nav">
      <a href="/" className="nav-link">
        {" "}
        <Image src={NAV_LOGO} className="nav-logo" />
      </a>
      <a href="#" onClick={(e) => toggleSidebar(e)} className="menu-btn">
        MENU
        <Image src={MENU_ICON} className="menu-btn-icon" />
      </a>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

export default Nav;
