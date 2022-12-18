import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../scss/navbar.scss";
import FaviconMyLogo from "../assets/FaviconMyLogo.png";
import NavItem from "./Main/NavItem";

const navItems = {
  homeId: null,
  aboutMe: null,
  skillsId: null,
  educationId: null,
  projectsId: null,
  contactCard: null,
};

function Navbar(props) {
  const [activeItem, setActiveItem] = useState("homeId");

  useEffect(() => {
    const observer = new MutationObserver(getAnchorPoints);
    observer.observe(document.getElementById("root"), {
      childList: true,
      subtree: true,
    });
    window.addEventListener("scroll", handleScroll);
  }, []);

  const getAnchorPoints = () => {
    const curScroll = window.scrollY - 100;
    const viewPortHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    for (const key in navItems) {
      navItems[key] =
        document.getElementById(key).getBoundingClientRect().top + curScroll;
    }
    const bottom = document.body.offsetHeight;
    handleScroll();
  };

  const handleScroll = () => {
    const curPos = window.scrollY;
    let curSection = null;
    for (const section in navItems) {
      curSection = navItems[section] >= curPos ? section : curSection;
      if (curSection !== section) {
        break;
      }
    }

    if (curSection !== activeItem) {
      setActiveItem(curSection);
    }
  };

  const menuList = Object.keys(navItems).map((e, i) => (
    <NavItem
      itemName={e}
      key={`navitem_${i}`}
      active={e === activeItem ? true : false}
      index={i}
    />
  ));
  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src={FaviconMyLogo}
        alt="a logo of the pnw mountain range"
      />
      <nav className="navbar__link-group">{menuList}</nav>

      <div className="navbar__github">
        <a href="https://github.com/CanadianRunner">
          <FontAwesomeIcon
            icon={faGithub}
            color="#A5C9CA"
            size="2x"
            href="https://github.com/CanadianRunner"
            alt="Link to Seans Github"
          />
        </a>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
