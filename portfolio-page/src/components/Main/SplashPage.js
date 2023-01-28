import React from "react";
import "animate.css";
import "../../scss/splash.scss";
import SK from "../../assets/SplashPageVid.mp4";
import staticSplash from "../../assets/Static_Splash.jpg"

function SplashPage(props) {
  const isMobile = () => {
    if (window.outerWidth > 912) {
      return <video src={SK} className="splash__video" autoPlay="1" muted></video>
    } else {
      return <img src={staticSplash} className="splash__image" alt='SplashPage' />
    }
  }

  return (
    <div className="splash" id="splashId">
      <div className="splash__content">
        {isMobile()}
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
