import React from 'react';
import portfolioData from '../portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faPlane, faMapPin } from '@fortawesome/free-solid-svg-icons'
import '../styles/about.css';

const female = <FontAwesomeIcon icon={faFemale} size="lg" style={{color: "black"}}/>;
const plane = <FontAwesomeIcon icon={faPlane} size="lg" style={{color: "black"}}/>;
const pin = <FontAwesomeIcon icon={faMapPin} size="lg" style={{color: "black"}}/>;

export const AboutSection = () => {
        return (
            <div className="about">
                <img src={window.location.origin + `${portfolioData.image}`} className="about-img" alt="jordan-selfie"/>
                <h1 id="about-h1">About Me</h1>
                <div id="icon-female">{female}</div>
                <p id="about-me">{portfolioData.aboutme}</p>
                <p id="about-me-sub">{portfolioData["about-me-sub"]}</p>
                <p id="about-me-sub-2">{portfolioData["about-me-sub-2"]}</p>
                <p id="about-me-sub-3">{portfolioData["about-me-sub-3"]}</p>
                <h1 id="location-h1">Where I'm At</h1>
                <div id="icon-pin">{pin}</div>
                <p id="location">{portfolioData.location}</p>
                <p id="location-sub">{portfolioData["location-sub"]}</p>
                <p id="location-sub-2">{portfolioData["location-sub-2"]}</p>
                <div className="places-section">
                    <h1 id="places-h1">Where I've Been</h1>
                    <div id="icon-plane">{plane}</div>
                    <div className="places">
                    <ul className="all-places">
                    {
                        portfolioData.countries && portfolioData.countries.map((item)=>{
                            return(
                                <li className="places-li">
                                    <p id="place-name">{item.Place}</p>
                                    <p id="place"> {item.Places}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
                </div>
            </div>
       )
    };

export default AboutSection;