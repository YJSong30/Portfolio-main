import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from './ProjectList';
import './ProjectDisplay.css'

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="pic"></img>
      <p>Description:</p>
      <ul>
        {project.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDisplay