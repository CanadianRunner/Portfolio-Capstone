import React from 'react'
import { Card, CardMedia } from '@mui/material';
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Factory from '../../assets/Factory_Repo.png'
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
    <div className='projects'>
      <div className='projects__card-group'>
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
      </div>
    </div>
  )
}

Projects.propTypes = {}

export default Projects
