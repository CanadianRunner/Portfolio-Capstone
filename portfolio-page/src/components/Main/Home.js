import React from 'react'
import SplashPage from './SplashPage'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import '../../scss/splash-page.scss';
import Certificates from './Certificates';
import Carousel from '../../components/Main/Carousel';
import { certificates } from '../../components/Main/Data';

function Home(props) {
  return (
    <div className='home'>
      <SplashPage />
      <About />
      <Skills />
      <Carousel images={certificates} />
      <Certificates />
      <Projects />
    </div>
  )
}


export default Home
