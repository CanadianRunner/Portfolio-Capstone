import React from "react";
import "animate.css";
import "../../scss/splash.scss";
import SK from "../../assets/SplashPageVid.mp4";

function SplashPage(props) {
  return (
    <div className="splash" id="splashId">
      <div className="splash__content">
        <video src={SK} className="splash__video" autoPlay="1" muted></video>
      </div>
      <div className="container">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </div>
  );
}
SplashPage.propTypes = {};

export default SplashPage;
