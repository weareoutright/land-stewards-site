import React from "react";
import Iframe from "react-iframe";

{
  /* <div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1055359690?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="home-header-video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */
}

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
      </div>
      <h1 className="header-1">Cultivating Thriving Landscapes</h1>
    </div>
  );
};

export default Hero;
