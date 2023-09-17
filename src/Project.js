import React from 'react';
import ProjectItem from './ProjectItem';
import "./Project.css";
import { ProjectList } from './ProjectList';


const Project = () => {
  return ( 
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image}></ProjectItem>
        })}
        
      </div>

    </div>
    
   );
}
 
export default Project;