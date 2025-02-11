import Link from "next/link";
import React from "react";

const WAYPOINTS = [
  {
    id: "partner-with-us",
    description:
      "We collaborate with people and organizations who share our goals. We invite research and pilot projects onto our demonstration site, and we travel to visit other sites as well.",
    btnText: "Partner With Us",
    href: "/partner-learn",
  },
  {
    id: "get-in-touch",
    description:
      "We inspire landowners and managers (large and small) with steps they can take on their lands. We offer site visits, workshops and training programs, and other learning opportunities.",
    btnText: "Get In Touch",
    href: "/contact",
  },
  {
    id: "ways-to-give",
    description:
      "We are a nonprofit organization and welcome support for our mission from institutions and individuals. If your funding priorities align with our work, let’s get in touch.",
    btnText: "Ways To Give",
    href: "/ways-to-give",
  },
];

const CTABannerHome = () => {
  return (
    <div className="CTABannerHome">
      <div className="cta-bg"></div>
      <small>Make an impact</small>
      <h2>Get Involved</h2>
      <div className="cta-waypoints">
        {WAYPOINTS.map((waypoint) => (
          <div key={waypoint.id} className="cta-waypoint">
            <p>{waypoint.description}</p>
            <Link href={waypoint.href} className="waypoint-btn primary-btn">
              {waypoint.btnText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTABannerHome;
