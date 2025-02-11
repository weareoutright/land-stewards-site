"use client";

import Link from "next/link";
import Image from "next/image";
import NEGATIVE_SPACE_MENU_ICON from "../assets/nav-menu-icon-neg-space.svg";

const CURRENT_RESEARCH_URL = "/current-research";
const BIODIVERSITY_REWILDING_URL = "/biodiversity-and-rewilding";
const ABOUT_URL = "/about-us";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="close-text">CLOSE</span>
          <a href="#" className="close-button" onClick={toggleSidebar}>
            <Image src={NEGATIVE_SPACE_MENU_ICON} alt="Close menu" />
          </a>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {/* Current Research */}
            <li>
              <Link href={CURRENT_RESEARCH_URL} className="parent-link">
                <small>CURRENT RESEARCH</small>
              </Link>
              <ul>
                <li>
                  <Link href={`${CURRENT_RESEARCH_URL}/hemlock-restoration`}>
                    Hemlock Restoration
                  </Link>
                </li>
                <li>
                  <Link href={`${CURRENT_RESEARCH_URL}/carbon-sequestration`}>
                    Carbon Sequestration
                  </Link>
                </li>
                <li>
                  <Link href={`${CURRENT_RESEARCH_URL}/prescribed-fire`}>
                    Prescribed Fire
                  </Link>
                </li>
              </ul>
            </li>

            {/* Biodiversity & Rewilding */}
            <li>
              <Link href={BIODIVERSITY_REWILDING_URL} className="parent-link">
                <small>BIODIVERSITY & REWILDING</small>
              </Link>
              <ul>
                <li>
                  <Link
                    href={`${BIODIVERSITY_REWILDING_URL}/Regenerative Agriculture`}
                  ></Link>
                </li>
                <li>
                  <Link
                    href={`${BIODIVERSITY_REWILDING_URL}/native-plant-nursery`}
                  >
                    Native Plant Nursery
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${BIODIVERSITY_REWILDING_URL}/wetlands-restoration`}
                  >
                    Wetlands Restoration
                  </Link>
                </li>
              </ul>
            </li>

            {/* Other Pages without Submenus */}
            <li className="no-children">
              <Link href="/the-land">THE LAND</Link>
            </li>
            <li className="no-children">
              <Link href="/education">EDUCATION</Link>
            </li>
            <li className="no-children">
              <Link href="/partner-learn">PARTNER & LEARN</Link>
            </li>

            {/* About Us */}
            <li>
              <Link href={ABOUT_URL} className="parent-link">
                <small>ABOUT US</small>
              </Link>
              <ul>
                <li>
                  <Link href={`${ABOUT_URL}/who-we-are`}>Who We Are</Link>
                </li>
                <li>
                  <Link href={`${ABOUT_URL}/how-we-work`}>How We Work</Link>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li className="no-children">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay (for closing when clicking outside) */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
