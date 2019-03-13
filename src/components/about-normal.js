import React from 'react';
import portfolioData from '../portfolioData';

export const AboutSection = () => {
        return (
            <div className="about">
                <img src={window.location.origin + `${portfolioData.image}`} className="about-img" alt="jordan-selfie"/>
                <h1 id="about-h1">About Me</h1>
                <p id="about-me">{portfolioData.aboutme}</p>
                <h1 id="skills-h1">Technical Stack</h1>
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