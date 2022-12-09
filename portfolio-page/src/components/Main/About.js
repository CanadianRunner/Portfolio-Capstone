import React from 'react'
import WorkingVid from '../../assets/WorkingVid.mp4';
import '../../scss/about.scss'
import { Card } from '@mui/material';

function About(props) {
  return (
    <div className='about'>
      <div className='about__me'>
        <Card variant="outlined" className='about__card' sx={{background: '#E7F6F2'}}> 
          <div className='about__content'>
            <h2 className='about__title'>About me</h2>
            <div>
              <p>Thanks for stopping by!  My name's Sean Keane. I live and try and keep dry in Portland, Oregon. I'm a dual Irish/Canadian citizen who you'll find happiest with a cup of Barry's tea and a bowl of poutine. I am a web developer who is excited to begin my engineering journey!</p> 
              <p>I currently have these certifications: Epicodus Full Stack C#/React Developer, Google IT Support Certificate, and multiple certifications from CodeCademy.  Growing as an engineer and learning new skills is my favourite part of software development.</p>
              <p>In addition to my time at Epicodus, I've recently been accepted and will complete my B.S. in Software Engineering from Western Governors University.  As part of my degree plan, I will also pursue certifications from CompTIA and Axelos.</p>
              <p>I'm an eager junior developer who is a fast learner, which is why I would be an asset to your team. If you think I'd be a good fit, feel free to you reach out!</p>
            </div>
          </div>
        </Card>
      </div>
      <div className='about__video-container'>
        <video src={WorkingVid} className="about__video"    autoplay="1" muted loop>
        </video>
      </div>
    </div>
  )
}

About.propTypes = {}

export default About
