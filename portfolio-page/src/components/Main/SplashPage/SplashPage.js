import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../../../scss/splash.scss';


function SplashPage(props) {
  return (
    <div className='splash'>
      <div className='splash__content'>
        <div className='splash__info'>
          <div className='splash__name'>
            <h1 class="animate__animated animate__rubberBand">Sean Keane</h1>
            <h3>This site is under construction!</h3>
            <h2>This is a 3rd test of a script deployment</h2>
          </div>
          <div className='splash__socials'>
            <FontAwesomeIcon icon={faGithub} size='3x' color='#f6f6c9' />
            <FontAwesomeIcon icon={faLinkedin} size='3x' color='#f6f6c9' />
            <FontAwesomeIcon icon={faEnvelope} size='3x' color='#f6f6c9' />
          </div>
        </div>
        <div className='splash__animation'>I am an animation</div>
      </div>
    </div>

)
}

{/* <h1 class="animate__animated animate__rubberBand">Sean Keane</h1> */}
SplashPage.propTypes = {}

export default SplashPage
