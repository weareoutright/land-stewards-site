import React from "react";
import BIO_REWILD from "../../assets/home/bio-rewild.svg";
import CURRENT_RESEARCH from "../../assets/home/current-research.svg";
import LAND_STEWARDS from "../../assets/home/land-stewards.svg";
import CardSideBySide from "../CardSideBySide";
import Carousel from "../Carousel";
import EASTERN_HEMLOCK_RESTORATION from "../../assets/carousel/eastern-hemlock.svg";
import REGEN_AGRICULTURE from "../../assets/carousel/regen.svg";
import NATIVE_PLANT_NURSERY from "../../assets/carousel/native-plant-nursery.svg";
import WETLANDS from "../../assets/carousel/wetlands.svg";

const CAROUSEL_ITEMS = [
  {
    id: "eastern-hemlock-restoration",
    image: EASTERN_HEMLOCK_RESTORATION,
    title: "Saving the Eastern Hemlock",
    href: "/current-research/hemlock-restoration",
  },
  {
    id: "regen-agriculture",
    image: REGEN_AGRICULTURE,
    title: "Regenerative Agriculture",
    href: "/biodivesity-and-rewilding/regenerative-agriculture",
  },
  {
    id: "native-plant-nursery",
    image: NATIVE_PLANT_NURSERY,
    title: "Native Plant Nursery",
    href: "/biodivesity-and-rewilding/hemlock-restoration",
  },
  {
    id: "wetlands-restoration",
    image: WETLANDS,
    title: "Wetlands Restoration",
    href: "/biodivesity-and-rewilding/wetlands-restoration",
  },
];

const HomeContent = () => {
  return (
    <div className="HomeContent">
      <CardSideBySide
        image={BIO_REWILD}
        imageAltText="Bio Rewild thumbnail"
        imageLeftBool={true}
        borderBottomBool={true}
        header="Biodiversity & Rewilding"
        textContent="We take an active, energetic approach to restoring and maintaining biodiversity and healthy ecosystems through practices that include rewilding and managed grazing. We also promote and prove out regenerative agricultural techniques based on new science and ancient practices to grow healthy food and contribute to biodiversity and a healthier world."
        btnText="View Projects & Focus Areas"
        btnHref="/biodiversity-and-rewilding"
        btnClass="secondary-btn"
      />
      <CardSideBySide
        image={CURRENT_RESEARCH}
        imageAltText="Current Research thumbnail"
        imageLeftBool={false}
        borderBottomBool={true}
        header="Current Research"
        textContent="We protect, restore, and maintain rare species and precious ecosystems through scientific research and collaborations and a diverse toolkit of active land management practices tailored for different habitats and ecosystems. We are committed to advancing scientific knowledge about ecosystem management through peer-reviewed, open-source studies and collaborations with researchers."
        btnText="Explore Our Ongoing Research"
        btnHref="/current-research"
        btnClass="secondary-btn"
      />
      <CardSideBySide
        image={LAND_STEWARDS}
        imageAltText="Land Stewards thumbnail"
        imageLeftBool={true}
        borderBottomBool={true}
        header="Lands Stewards"
        textContent="We are a nonprofit organization on a mission to promote expansive land stewardship that incorporates ecological health, regenerative agriculture, long-term thinking, and cultural preservation. We do this by proving out best practices at our 2,700-acre demonstration site, training professionals in emerging techniques, and inspiring landowners and managers to make positive changes on the lands that they steward."
        btnText="Learn More About Land Stewards"
        btnHref="/about"
        btnClass="secondary-btn"
      />

      <div className="explore-our-work">
        <div className="header">
          <h3 className="header-3">Explore Our Work</h3>
          <div className="title-and-controls">
            <small>
              Learn more about our current projects and stewardship work
            </small>
          </div>
          <Carousel items={CAROUSEL_ITEMS} />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
