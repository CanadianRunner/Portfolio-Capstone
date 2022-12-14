import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faAddressCard, faToolbox, faRectangleList, faEnvelopeOpenText, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../scss/navbar.scss';
import FaviconMyLogo from '../assets/FaviconMyLogo.png';


const Navbar = () => (
  <div className='navbar'>
    <img className="navbar__logo" src={FaviconMyLogo} alt='a logo of the pnw mountain range'/>
    <nav className='navbar__link-group'>
      <div className='navbar__link'>
        <span className='navbar__home'>
          <FontAwesomeIcon icon={faHouse} color="#A5C9CA" size='2x' alt='home button'/>
        </span>
      </div>
      <div className='navbar__link'>
        <span className='navbar__about'>
          <FontAwesomeIcon icon={faAddressCard} color="#A5C9CA" size='2x' alt='about me' />
        </span>
      </div>
      <div className='navbar__link'>
        <span className='navbar__skills'>
          <FontAwesomeIcon icon={faToolbox} color="#A5C9CA" size='2x' alt='skills/certifications'/>
        </span>
      </div>
      <div className='navbar__link'>
        <span className='navbar__education'>
            <FontAwesomeIcon icon={faGraduationCap} color="#A5C9CA" size='2x' alt='education' />
        </span>
      </div>
      <div className='navbar__link'>
        <span className='navbar__projects'>
          <FontAwesomeIcon icon={faRectangleList} color="#A5C9CA" size='2x' alt='projects' />
        </span>
      </div>
      <div className='navbar__link'>
        <span className='navbar__contact'>
            <FontAwesomeIcon icon={faEnvelopeOpenText} color="#A5C9CA" size='2x' alt='contact me' />
        </span>
      </div>
    </nav>
    
    <div className='navbar__github'>
      <FontAwesomeIcon icon={ faGithub } color="#A5C9CA" size='2x' href='https://github.com/CanadianRunner' />
     </div>
  </div>
)


export default Navbar;
