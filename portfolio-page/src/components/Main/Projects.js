import React from 'react'
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Factory from '../../assets/Factory_Repo.png';
import Dotties from '../../assets/Dotties_Repo.png';
import Bakery from '../../assets/Bakery_Repo.png';
import F1 from '../../assets/F1_Repo.jpg'

import '../../scss/projects.scss';

function Projects(props) {
  const showDetails = (e) => {
    console.log('mouse is hovering')
    // e.target.classList.add();
  }

  const removeDetails = (e) => {
    console.log('mouse stopped hovering')
    // e.target.classList.remove()
  }

  return (
    <div className='projects' id="projectsId">
      <span className='projects__title'>
      <h1>My Projects</h1>
      </span>
      <div className='projects__card-group1'>
        <Card onMouseEnter={showDetails} onMouseLeave={removeDetails} className='projects__card'>
          <CardMedia
            className='projects__card-image'
            component="img"
            height="100%"
            image={Factory}
            alt="thing"
          />
          <div>
            Hello World
          </div>
          {/* <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"><FontAwesomeIcon icon={faGithub}/></Button>
          </CardActions> */}
        </Card>

        <Card onMouseEnter={showDetails} onMouseLeave={removeDetails} className='projects__card'>
          <CardMedia
            className='projects__card-image'
            component="img"
            height="100%"
            image={Dotties}
            alt="thing"
          />
          <div>
            Hello World
          </div>
        </Card>
        </div>
        <div className='projects__card-group2'>
        <Card onMouseEnter={showDetails} onMouseLeave={removeDetails} className='projects__card'>
          <CardMedia
            className='projects__card-image'
            component="img"
            height="100%"
            image={Bakery}
            alt="thing"
          />
          <div>
            Hello World
          </div>
        </Card>

        <Card onMouseEnter={showDetails} onMouseLeave={removeDetails} className='projects__card'>
          <CardMedia
            className='projects__card-image'
            component="img"
            height="100%"
            image={F1}
            alt="thing"
          />
          <div>
            Hello World
          </div>
        </Card>
        </div>
      </div>
    
  )
}

Projects.propTypes = {}

export default Projects
