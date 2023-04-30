import React from "react";
import WorkingVid from "../../assets/WorkingVid.mp4";
import "../../scss/about.scss";
import { Card } from "@mui/material";

function About(props) {
  return (
    <div className="about" id="aboutMe">
      <div className="about__me">
        <Card
          variant="outlined"
          className="about__card"
          sx={{ background: "#E7F6F2" }}>
          <div className="about__content">
            <h2 className="about__title">About me</h2>
            <div className="about__body">
              <br></br>
              <p>
                Thanks for stopping by! My name's Sean Keane and I'm a software developer. I live and try and
                keep dry in Portland, Oregon. I'm a dual Irish/Canadian citizen
                who you'll find happiest with a cup of Barry's Irish breakfast
                tea and a bowl of poutine.
              </p>
              <br></br>
              <p>
                I'm a fast learner and would positively impact your team. If
                you have an opportunity you think I'd be a good fit for, I'd
                love it if you reached out!
              </p>
              <br></br>
            </div>
          </div>
        </Card>
      </div>
      <div className="about__video-container">
        <video
          src={WorkingVid}
          className="about__video"
          autoPlay="1"
          muted
          loop
          alt="Video of Sean working at his desk"></video>
      </div>
    </div>
  );
}

About.propTypes = {};

export default About;
