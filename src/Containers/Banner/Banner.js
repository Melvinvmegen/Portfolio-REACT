import React from "react";
import BannerLeft from "./BannerLeft/BannerLeft";
import BannerRight from "./BannerRight/BannerRight";

const banner = () => {
  return (
    <div id="section-home" className="section-home">
      <div className="blocks-hero" id="first-child">
        <div className="main-container">
          <div className="home-face">
            <BannerLeft />
            <BannerRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default banner;

