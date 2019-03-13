import React from 'react';
import portfolioData from '../portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faTools, faPlane } from '@fortawesome/free-solid-svg-icons'
import '../styles/about.css';

const female = <FontAwesomeIcon icon={faFemale} size="lg" style={{color: "black"}}/>;
const tools = <FontAwesomeIcon icon={faTools} size="lg" style={{color: "black"}}/>;
const plane = <FontAwesomeIcon icon={faPlane} size="lg" style={{color: "black"}}/>;

export const AboutSection = () => {
        return (
            <div className="about">
                <img src={window.location.origin + `${portfolioData.image}`} className="about-img" alt="jordan-selfie"/>
                <h1 id="about-h1">About Me</h1>
                <div id="icon-female">{female}</div>
                <p id="about-me">{portfolioData.aboutme}</p>
                <h1 id="countries-h1">Countries I've Visited</h1>
                <div id="icon-plane">{plane}</div>
                <p id="countried">{portfolioData.countries}</p>
                <h1 id="skills-h1">Technical Stack</h1>
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
    };

export default AboutSection;