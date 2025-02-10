import React from "react";
import Image from "next/image";
import Link from "next/link";
import FOOTER_FLOWER_BLACK from "../assets/footer-flower.svg";
import IG_ICON from "../assets/ig-icon.svg";
import FB_ICON from "../assets/facebook-icon.svg";
import YOUTUBE_ICON from "../assets/youtube-icon.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <Image src={FOOTER_FLOWER_BLACK} alt="" className="footer-bg" />
      <div className="content footer-content">
        <div className="org-info">
          <div classname="non-profit-social-links">
            <p>
              <strong>Land Stewards</strong> is a 501(c)(3) nonprofit
              organization dedicated to land stewardship that incorporates
              ecological health, regenerative agriculture, long-term thinking,
              and cultural preservation.
            </p>
            <div className="social-links">
              <Image
                src={IG_ICON}
                alt="Instagram"
                className="social-link-icon"
              />
              <Image
                src={FB_ICON}
                alt="Facebook"
                className="social-link-icon"
              />
              <Image
                src={YOUTUBE_ICON}
                alt="YouTube"
                className="social-link-icon"
              />
            </div>
          </div>
          <p>Privacy policy | © Land Stewards 2025</p>
        </div>
        <div className="site-page-links">
          <div className="col-1">
            <ul>
              <li>
                <Link href="/current-research">
                  <small>CURRENT RESEARCH</small>
                </Link>
                <ul>
                  <li>
                    <Link href="/hemlock-restoration">Hemlock Restoration</Link>
                  </li>
                  <li>
                    <Link href="/carbon-sequestration">
                      Carbon Sequestration
                    </Link>
                  </li>
                  <li>
                    <Link href="/prescribed-fire">Prescribed Fire</Link>
                  </li>
                </ul>
              </li>
              <li>
                <small>
                  <Link href="/biodiversity-and-rewilding">
                    BIODIVERSITY <br></br>& REWILDING
                  </Link>
                </small>
                <ul>
                  <li>
                    <Link href="/regenerative-agriculture">
                      Regenerative Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link href="/native-plant-nursery">
                      Native Plant Nursery
                    </Link>
                  </li>
                  <li>
                    <Link href="/wetlands-restoration">
                      Wetlands Restoration
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="no-children">
                <Link href="/the-land">THE LAND</Link>
              </li>
              <li className="no-children">
                <Link href="/education">EDUCATION</Link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <li className="no-children">
                <Link href="/partner-learn">PARTNER & LEARN</Link>
              </li>
              <li>
                <Link href="/about">
                  <small>ABOUT US</small>
                </Link>
                <ul>
                  <li>
                    <Link href="/who-we-are">Who We Are</Link>
                  </li>
                  <li>
                    <Link href="/how-we-work">How We Work</Link>
                  </li>
                </ul>
              </li>
              <li className="no-children">
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
