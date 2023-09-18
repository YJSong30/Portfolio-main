import React from 'react';
import ProjectItem from './ProjectItem';
import "./Project.css";
import { ProjectList } from './ProjectList';


const Project = () => {
  return ( 
    <div className='projects'>
      <h2>Personal Projects</h2>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image}></ProjectItem>
        })}
        
      </div>

    </div>
    
   );
}
 
export default Project;