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
      <div className='about__content'>
        <h2 className='about__title'>About me</h2>
        <div>
          <p>Hi, thanks for stopping by!  My name's Sean Keane.  I live and try and keep dry in Portland, Oregon. I'm a dual Irish/Canadian citizen who you'll find happiest with a cup of Barry's tea and a bowl of poutine. I am a web developer who is excited to begin my engineering journey!</p> 
          <p>I currently have these certification: .... and Im always growing my skills</p>
          <p>I'm an eager jr developer who is a fast learner which is why I would be an asset to any team. If you think I'd be a good fit, feel free to you reach out!</p>
        </div>
      </div>

      
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
