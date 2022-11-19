import '../scss/navbar.scss'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => (
  <div className='navbar'>
    {/* When you get a logo it goes here */}
    <nav>
      <div className='navbar__link'>
        <span className='navbar__home'>
          <FontAwesomeIcon icon={faHome} color="#F6F6C9" />
        </span>
      </div>
      <div className='navbar__link'></div>
      <div className='navbar__link'></div>
      <div className='navbar__link'></div>
      <div className='navbar__link'></div>
    </nav>
  </div>
)

export default NavBar;
