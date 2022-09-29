import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardDemo from './ProjectCardDemo';
import './Projects.css';
import ProjectsDesc from '../Constants/ProjectsDesc'
import ProjectDemo from '../Constants/ProjectDemo'

const Projects = () => {
    return ( 
        <div className='project-item'>
            <h1 className='color-text'>University Projects</h1>
            {ProjectDemo.map((p, i) => (
                <ProjectCardDemo 
                    key={i}
                    name={p.name}
                    description={p.description}
                    stacks={p.stacks}
                    code_url={p.code_url}
                    demo_url={p.demo_url}
                />
            ))} 
            {ProjectsDesc.map((p, i) => (
                <ProjectCard 
                    key={i}
                    name={p.name}
                    description={p.description}
                    stacks={p.stacks}
                    code_url={p.code_url}
                />
            ))} 
             

        </div>
    );
}
 
export default Projects;