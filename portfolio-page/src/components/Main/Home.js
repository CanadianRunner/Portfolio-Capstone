import React from 'react'
import PropTypes from 'prop-types'
import SplashPage from './SplashPage'
import '../../scss/splash-page.scss';

function Home(props) {
  return (
    <div className='home'>
      <SplashPage />
    </div>
  )
}

Home.propTypes = {}

export default Home
