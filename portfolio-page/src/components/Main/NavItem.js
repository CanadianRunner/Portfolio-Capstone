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

const NavItem = ({ itemName, active, index, iconIsVisible, itemId }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemId));
  }, [itemId]);

  const handleClick = (event) => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="navbar__link">
      <a
        href={`#${itemId}`}
        onClick={handleClick}
        className={active ? "active" : ""}
        style={{textDecoration: 'none'}}
        aria-label={`Scroll to ${itemName}`}>
        {iconIsVisible ? 
        <FontAwesomeIcon
          icon={navIcons[index]}
          color="#A5C9CA"
          size="2x"
          alt="home button"/> : <h4 className={itemName === "home" ? "active navbar__name-link" : "navbar__name-link"}>{itemName}</h4>
        }
      </a>
    </div>
  );
};

export default NavItem;
