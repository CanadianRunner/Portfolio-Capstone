import React from 'react'
import PropTypes from 'prop-types'
import SplashPage from './SplashPage'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import '../../scss/splash-page.scss';
import Certificates from './Certificates';

function Home(props) {
  return (
    <div className='home'>
      <SplashPage />
      <About />
      <Skills />
      <Certificates />
      <Projects />
    </div>
  )
}

Home.propTypes = {}

export default Home
