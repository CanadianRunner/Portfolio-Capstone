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
            <div className='about__body'>
              <br></br>
              <p>Thanks for stopping by! My name's Sean Keane. I live and try and keep dry in Portland, Oregon. I'm a dual Irish/Canadian citizen who you'll find happiest with a cup of Barry's tea and a bowl of poutine. I am a junior web developer who is excited to transition my career into software engineering!</p> 
              <br> 
              </br>
              <p>I'm a fast learner and would positively impact your team. So if you have an opportunity you think I'd be a good fit for, I'd love it if you reached out!</p>
              <br></br>
            </div>
          </div>
        </Card>
      </div>
      <div className='about__video-container'>
        <video src={WorkingVid} className="about__video" autoPlay="1" muted loop>
        </video>
      </div>
    </div>
  )
}

About.propTypes = {}

export default About
