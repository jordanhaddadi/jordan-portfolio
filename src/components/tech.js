import React from 'react';
import portfolioData from '../portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons'
import '../styles/tech.css';

const tools = <FontAwesomeIcon icon={faTools} size="lg" style={{color: "black"}}/>;

export const TechSection = () => {
    return (
        <div className="tech-section">
            <h1 id="skills-h1">Tech Stack</h1>
            <div id="icon-tools">{tools}</div>
            <div className="skills">
                <ul className="all-skills">
                {
                    portfolioData.skills && portfolioData.skills.map((item)=>{
                        return(
                        <li className="skills-li">
                            <p id="skill-name">{item.skillName}</p>
                            <p id="skill"> {item.skill}</p>
                        </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default TechSection;