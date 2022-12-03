import React from 'react'
import PropTypes from 'prop-types'
import WorkingVid from '../../assets/WorkingVid.mp4';
import '../../scss/about.scss'

function About(props) {
  return (
    <div className='about'>
      <div className='about__me'>about</div>
      <div className='about__video-container'>
        <video src={WorkingVid} className="about__video" autoplay="1" muted loop>
        </video>
      </div>
    </div>
  )
}

About.propTypes = {}

export default About
