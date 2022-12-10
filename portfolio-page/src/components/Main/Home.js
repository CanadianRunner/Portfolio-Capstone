import React from 'react'
import PropTypes from 'prop-types'
import SplashPage from './SplashPage'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import '../../scss/splash-page.scss';

function Home(props) {
  return (
    <div className='home'>
      <SplashPage />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

Home.propTypes = {}

export default Home
