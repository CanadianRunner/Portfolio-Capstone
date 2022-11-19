import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faAddressCard, faToolbox, faRectangleList, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import '../scss/navbar.scss';

const Navbar = () => (
  <div className='navbar'>
    <div className='navbar__logo'>Logo</div>
    {/* When you get a logo it goes here */}
    <nav className='navbar__link-group'>
      <div className='navbar__link'>
        <span className='navbar__home'>
          <FontAwesomeIcon icon={faHouse} color="#F6F6C9" size='2x' />
        </span>
      </div>
      <div className='navbar__link'>
        <span className='navbar__about'>
          <FontAwesomeIcon icon={faAddressCard} color="#F6F6C9" size='2x' />
        </span>
      </div>
      <div className='navbar__link'>
        <span className='navbar__skills'>
          <FontAwesomeIcon icon={faToolbox} color="#F6F6C9" size='2x' />
        </span>
      </div>
      <div className='navbar__link'>
        <span className='navbar__projects'>
          <FontAwesomeIcon icon={faRectangleList} color="#F6F6C9" size='2x' />
        </span>
      </div>
      <div className='navbar__link'>
        <span className='navbar__contact'>
            <FontAwesomeIcon icon={faEnvelopeOpenText} color="#F6F6C9" size='2x' />
        </span>
      </div>
    </nav>
    <div className='navbar__github'>
      <FontAwesomeIcon icon={ faGithub } color="#F6F6C9" size='lg' />
     </div>
  </div>
)


export default Navbar;
