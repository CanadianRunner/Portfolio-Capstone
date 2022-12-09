import React from 'react'
import PropTypes from 'prop-types'
import WorkingVid from '../../assets/WorkingVid.mp4';
import '../../scss/about.scss'
// import Card from 'react-bootstrap/Card';

function About(props) {
  return (
    <div className='about'>
      <div className='about__me'>
      {/* <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br /> */}
        <h2>About Me</h2>
        <p>Hi, thanks for stopping by!  My name's Sean Keane.  I live and try and keep dry in Portland, Oregon.  I'm a dual Irish/Canadian citizen who you'll find happiest with a cup of Barry's tea and a bowl of poutine.</p> 

        <p>I am a web developer who recently completed a ten-month-long full stack Bootcamp at Epicodus(link to Epicodus.com).  I pursued a certification in C#/React through my Bootcamp, and I'm on my way to beginning my career in this exciting field!  I enjoy technology and engineering solutions; this led me to pursue software development.</p>

        <p>In addition to my time at Epicodus, I've recently been accepted and will complete my B.S. in Software Engineering from Western Governors University.  As part of my degree plan, I will also pursue certifications from CompTIA and Axelos.</p>

        <p>I bring with me knowledge from my Bootcamp, along with certifications from Google and Codecademy.  I would be a strong asset as a junior developer to most teams.  I'm a fast learner and would quickly impact your team.  If you have an opportunity you think I'd be a good fit for, I'd love it if you reached out!</p>
      
      </div>
      <div className='about__video-container'>
        <video src={WorkingVid} className="about__video" autoplay="1" muted loop>
        </video>
      </div>
    </div>
  )
}

About.propTypes = {}

export default About
