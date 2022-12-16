import React from 'react'
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Factory from '../../assets/Factory_Repo.png';
import Dotties from '../../assets/Dotties_Repo.png';
import Bakery from '../../assets/Bakery_Repo.png';
import F1 from '../../assets/F1_Repo.jpg'

import '../../scss/projects.scss';

const projects = [
  {
    alt:'image of factory',
    img: Factory,
    id: 1,
    title:'C# MVC Application',
    href: 'https://github.com/CanadianRunner/SillystringzsFactory.Solution'
  },
  {
    alt:'Image of apothecary store',
    img: Dotties,
    id: 2,
    title: "Team Built Application",
    href:'https://github.com/CanadianRunner/DottiesApothecarry.Solution'
  },
  {
    alt:'Image of a Bakery Store',
    img: Bakery,
    id: 3,
    title: "MVC Application with Authentication",
    href:'https://github.com/CanadianRunner/PierresSweetAndSavoryTreats.Solution'
  },
  {
    alt:'Image of a Formula One Season Tracker',
    img: F1,
    id:4,
    title: "JavaScript Team Built Application",
    href:'https://github.com/CanadianRunner/Formula-One-App'
  }
];

function Projects(props) {
  const showDetails = (e, id) => {
    const el = document.getElementById(id);
    el.classList.add('relative-title');
    e.target.classList.add('card-hover');
  }

  const removeDetails = (e, id) => {
    const el = document.getElementById(id);
    e.target.classList.remove('card-hover');
    el.classList.remove('relative-title');
  }

  return (
    <div className='projects' id="projectsId">
      <span className='projects__title'>
      <h1>My Projects</h1>
      </span>
      <div className='projects__card-groups'>
        {projects.map((project, i) => {
          return (
            <Card onMouseEnter={(e) => showDetails(e, project.id)} onMouseLeave={(e) => removeDetails(e, project.id)} className='projects__card'>
              <CardMedia
                className='projects__card-image'
                component="img"
                height="100%"
                image={project.img}
                alt={project.alt}
              />
                <a href={project.href}>
                  <div id={project.id} className="projects__card-content">
                    {project.title}
                  </div>
                </a>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

Projects.propTypes = {}

export default Projects
