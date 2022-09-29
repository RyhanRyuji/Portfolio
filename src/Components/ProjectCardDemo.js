import React from 'react';
import './ProjectCard.css';
import{FaRocket} from 'react-icons/fa'

const ProjectCardDemo = ({name, description, stacks,code_url,demo_url}) => {
    return (  
        <div className='project_card'>
            <div>
                <p className='project_card-title'>
                    {name}
                </p>
                <p className='project_card-description'>
                    {description}
                </p>
                <div className='project_card-techstacks'>
                <FaRocket className='rocket' size="1.5em"/>
                    <p className='color-subtext'> Stack: </p>
                    <div className='project_card-stacklists '>
                        
                        {stacks.map((s,i) => (
                            <p key={i}>{s}</p>
                        ))}
                   
                </div>
                <div className='project_card-buttons'>
                   <a className='codes_url' href={code_url} target="_blank">Codes</a>
                   <a className='demo_url' href={demo_url} target="_blank">demo</a>

                </div>

                </div>
            </div>
        </div>
    );
}
 
export default ProjectCardDemo;