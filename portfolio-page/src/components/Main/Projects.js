import React from "react";
import { Card, CardMedia } from "@mui/material";
import Factory from "../../assets/Factory_Repo.png";
import Dotties from "../../assets/Dotties_Repo.png";
import Bakery from "../../assets/Bakery_Repo.png";
import F1 from "../../assets/F1_Repo.jpg";

import "../../scss/projects.scss";

const projects = [
  {
    alt: "This is an image of C# app and links to the github repo.",
    img: Factory,
    id: 1,
    title: "C#/MySQL Application with many to many relationships",
    href: "https://github.com/CanadianRunner/SillystringzsFactory.Solution",
  },
  {
    alt: "This is an image of my Team Week app and links to the github repo.",
    img: Dotties,
    id: 2,
    title: "C#/MySQL Team Built Custom StoreFront Application",
    href: "https://github.com/CanadianRunner/DottiesApothecarry.Solution",
  },
  {
    alt: "This is an image of C# app and links to the github repo.",
    img: Bakery,
    id: 3,
    title: "C# MVC Application with Authentication/Identity utilizing mySQL",
    href: "https://github.com/CanadianRunner/PierresSweetAndSavoryTreats.Solution",
  },
  {
    alt: "Image of a Formula One Season Tracker and links to the github repo",
    img: F1,
    id: 4,
    title: "JavaScript Team Built Application with 3rd party API integration",
    href: "https://github.com/CanadianRunner/Formula-One-App",
  },
];

function Projects(props) {
  const showDetails = (e, id) => {
    const el = document.getElementById(id);
    el.classList.add("relative-title");
    e.target.classList.add("card-hover");
  };

  const removeDetails = (e, id) => {
    const el = document.getElementById(id);
    e.target.classList.remove("card-hover");
    el.classList.remove("relative-title");
  };

  return (
    <div className="projects" id="projectsId">
      <span className="projects__title">
        <h1>My Projects</h1>
      </span>
      <div className="projects__card-groups">
        {projects.map((project, i) => {
          return (
            <Card
              key={i}
              onMouseEnter={(e) => showDetails(e, project.id)}
              onMouseLeave={(e) => removeDetails(e, project.id)}
              className="projects__card">
              <CardMedia
                className="projects__card-image"
                component="img"
                height="100%"
                image={project.img}
                alt={project.alt}/>
                <a href={project.href}>
                <div id={project.id} className="projects__card-content">
                  {project.title}
                </div>
              </a>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

Projects.propTypes = {};

export default Projects;
