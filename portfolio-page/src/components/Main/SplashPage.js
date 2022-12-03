import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../../scss/splash.scss';
import SK from '../../assets/SK.mp4';

function SplashPage(props) {
  return (
    <div className='splash'>
      <div className='splash__content'>
        <video src={SK} className="splash__video" autoPlay="1" muted>
        </video>
      </div>
    </div>

)
}

{/* <h1 class="animate__animated animate__rubberBand">Sean Keane</h1> */}
SplashPage.propTypes = {}

export default SplashPage
