import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import  NavItem from './NavItem';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const handleClose = () => {

// }

const navItems = {
  homeId: {
    name: 'Home',
    element: null,
    id: 'homeId'
  },
  aboutMe: {
    name: 'About',
    element: null,
    id: 'aboutMe'
  },
  skillsId: {
    name: 'Skills',
    element: null,
    id: 'skillsId'
  },
  educationId: {
    name: 'Education',
    element: null,
    id: 'educationId'
  },
  projectsId: {
    name: 'Projects',
    element: null,
    id: 'projectsId'
  },
  contactCard: {
    name: 'Contact',
    element: null,
    id: 'contactCard'
  }
};

function MobileNav(props) {
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

    for (const key in navItems) {
      navItems[key].element =
        document.getElementById(key).getBoundingClientRect().top + curScroll;
    }
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
      setActiveItem(navItems[curSection]);
    }
  };

  const menuList = Object.values(navItems).map((e, i) => (
    <NavItem
      itemName={e.name}
      itemId={e.id}
      key={`navitem_${i}`}
      active={e.id === activeItem ? true : false}
      index={i}
      iconIsVisible={false}
    />
  ))
  return (
    <>
      <FontAwesomeIcon icon={faX} size/>
      <div className='mobile-nav'>
        <div className='mobile-nav__header'>
          <h1>Menu</h1>
        </div>
        <div className='mobile-nav__nav-items'>
          {menuList}
        </div>
      </div>
    </>
  )
}

MobileNav.propTypes = {}

export default MobileNav
