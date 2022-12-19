import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressCard,
  faToolbox,
  faRectangleList,
  faEnvelopeOpenText,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const navIcons = [
  faHouse,
  faAddressCard,
  faToolbox,
  faGraduationCap,
  faRectangleList,
  faEnvelopeOpenText,
];

const NavItem = ({ itemName, active, index }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  const handleClick = (event) => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="navbar__link">
      <a
        href={`#${itemName}`}
        onClick={handleClick}
        className={itemName === "homeId" ? "active" : ""}
        aria-label={`Scroll to ${itemName}`}>
        <FontAwesomeIcon
          icon={navIcons[index]}
          color="#A5C9CA"
          size="2x"
          alt="home button"/>
      </a>
    </div>
  );
};

export default NavItem;
