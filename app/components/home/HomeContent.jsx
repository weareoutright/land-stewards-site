import React from "react";
import BIO_REWILD from "../../assets/home/bio-rewild.svg";
import CURRENT_RESEARCH from "../../assets/home/current-research.svg";
import LAND_STEWARDS from "../../assets/home/land-stewards.svg";
import CardSideBySide from "../CardSideBySide";

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
    </div>
  );
};

export default HomeContent;
