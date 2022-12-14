import React from 'react'
import PropTypes from 'prop-types'
import "../../scss/education.scss";
import { Card } from '@mui/material';
import Epicodus from '../../assets/epicodus-logo.png';
import Codecademy from '../../assets/codecademy.png';
import WGU2 from '../../assets/wgu-logo2.png';



function Education(props) {
  return (
    <div className='education__section'>
    <div className='education'>
    <Card variant="outlined" className='education__card' sx={{background: '#E7F6F2'}}> 
      <div className='education__content'>
        <h2 className='education__title'>Software Development Education</h2>
        <div className='education__images'>
          <div className='education__epicodus'>
            <img src={Epicodus} alt='Epicodus Bootcamp Logo' width={300} href='https://www.epicodus.com/' ></img>
          </div>
          <div className='education__wgu'>
            <img src={WGU2} alt='Western Governors University Logo' width={300}></img>
          </div>
          <div className='education__codecademy'>
            <img src={Codecademy} alt='Codecademy Logo' width={300}></img>
          </div>
        </div>
        <div className='education__body'>
          <p>I recently completed my time-intensive Bootcamp at Epicodus.  This ten-month-long commitment helped develop my understanding of HTML, CSS, JavaScript, React, C#/.NET, MySQL, and many more technologies. In addition, my Bootcamp readied me for the workforce with daily stand-ups/retrospectives, bi-weekly code reviews, and over 800 hours of pair programming.</p>
          <br></br>
          <p>I also pursued certifications and learning opportunities from Codecademy and Coursera. These opportunities helped fill knowledge gaps and solidified complex concepts.</p>
          <br></br>
          <p>I recently transferred to Western Governors University and will complete my B.S. in Software Engineering, focusing on Java.</p>
        </div>
      </div>
    </Card>
  </div>
    </div>
  )
}

Education.propTypes = {}

export default Education
