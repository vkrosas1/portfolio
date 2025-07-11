import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { projectsList } from "../data/ProjectsList";
import { projectImage } from "../utils/ProjectToImage";
import "../styles/ProjectCards.css";

function ProjectCards() {
  return (
    <div className="project-cards-container" tabIndex="0">
      {projectsList.projects.map((project, id) => (
        <Card key={id} className="project-card" tabIndex="0">
          <Card.Img
            variant="top"
            src={projectImage(project.name)}
            alt={project.name}
          />
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <div className="project-badge-container">
              {project.technologies.map((tech, index) => (
                <Badge
                  bg="secondary"
                  text="light"
                  key={index}
                  className="project-badge"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProjectCards;
