import React, { useState, useEffect, useRef } from "react";
import SplashPage from "./SplashPage";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "../../scss/splash-page.scss";
import Carousel from "../../components/Main/Carousel";
import { certificates } from "../../components/Main/Data";
import Education from "./Education";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function Home(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const screenSizeAlertShown = useRef(false);

  const showScreenSizeAlert = () => {
    if (!screenSizeAlertShown.current) {
      screenSizeAlertShown.current = true;
      toast.info(
        "This site is best viewed on a desktop or laptop computer. Mobile styling is currently under construction.",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 10000,
        }
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      showScreenSizeAlert();
    }
  }, [isMobile]);

  return (
    <div className="home" id="homeId">
      <SplashPage />
      <About />
      <Skills />
      <Carousel images={certificates} />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
