import React from "react";
import SplashPage from "./SplashPage";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "../../scss/splash-page.scss";
import Carousel from "../../components/Main/Carousel";
import { certificates } from "../../components/Main/Data";
import Education from "./Education";

function Home(props) {
  return (
    <div className="home" id="homeId">
      <SplashPage />
      <About />
      {/* <Skills /> */}
      <Carousel images={certificates} />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
