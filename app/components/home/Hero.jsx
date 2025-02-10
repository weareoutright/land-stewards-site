import React from "react";
import Image from "next/image";
import Iframe from "react-iframe";
import WAVE from "../../assets/wave.svg";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="video-container">
        <Iframe
          src="https://player.vimeo.com/video/1055359690?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;background=1&amp;responsive=1&amp;frameborder=0&amp;muted=1"
          title="home-header-video"
          className="background-video"
          allow="autoplay"
        ></Iframe>
        <Image src={WAVE} alt="wave" className="wave" />
      </div>
      <div className="content home-hero-content">
        <h1 className="header-1">
          Cultivating Thriving<br></br> Landscapes
        </h1>
        <p className="hero-text">
          We promote innovative stewardship practices using a land-as-laboratory
          approach that honors the site-specific needs of the land, its history,
          and its communities.
        </p>
      </div>
    </div>
  );
};

export default Hero;
