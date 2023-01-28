import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import  NavItem from './NavItem';


const navItems = {
  homeId: null,
  aboutMe: null,
  skillsId: null,
  educationId: null,
  projectsId: null,
  contactCard: null,
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
    // const viewPortHeight = Math.max(
    //   document.documentElement.clientHeight,
    //   window.innerHeight || 0
    // );

    for (const key in navItems) {
      navItems[key] =
        document.getElementById(key).getBoundingClientRect().top + curScroll;
    }
    // const bottom = document.body.offsetHeight;
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
      iconIsVisible={false}
    />
  ))
  return (
    <div className='mobile-nav'>
      <div className='mobile-nav__header'>
        <h1>Menu</h1>
      </div>
      <div className='mobile-nav__nav-items'>
        {menuList}
      </div>
    </div>
  )
}

MobileNav.propTypes = {}

export default MobileNav
