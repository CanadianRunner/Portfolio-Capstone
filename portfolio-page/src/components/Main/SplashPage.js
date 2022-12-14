import React from "react";
import "animate.css";
import "../../scss/splash.scss";
import SK from "../../assets/SplashPageVid.mp4";

function SplashPage(props) {
  return (
    <div className="splash">
      <div className="splash__content">
        <video src={SK} className="splash__video" autoPlay="1" muted></video>
      </div>
      <div class="container">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
    </div>
  );
}
// {/* <h1 class="animate__animated animate__rubberBand">Sean Keane</h1> */}
SplashPage.propTypes = {};

export default SplashPage;
