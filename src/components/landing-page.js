import React from 'react';
// import { Redirect } from 'react-router-dom';
import About from './about.js';
import Portfolio from './portfolio';
import Resume from './resume';
import portfolioData from '../portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/landing.css';

const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="lg" color="teal"/>;
const gitHub = <FontAwesomeIcon icon={faGithub} size="lg" color="black"/>;
const twitter = <FontAwesomeIcon icon={faTwitter} size="lg" color="blue"/>;

export const LandingPage = () => {

    return (
        <div className="home">
            <div className="landing-top">
                <div className='landing-content'>
                    <div className='landing-text'>
                        <h1>{portfolioData.name}</h1>
                        <p id="role">{portfolioData.role}</p>
                        <p id="role-description">{portfolioData.roleDescription}</p>
                        <div className="about">
                            <About />
                            <Resume />
                        </div>
                    </div>        
                </div>
            </div>
            <Portfolio />
                <ul className="social-links">
                        <li id="social-li">
                            <a href="https://www.linkedin.com/in/jordan-haddadi/">
                            {linkedIn}
                            </a>
                        </li>
                        <li id="social-li">
                            <a href="https://github.com/jordanhaddadi">
                            {gitHub}
                            </a>
                        </li>
                        <li id="social-li">
                            <a href="https://twitter.com/johaddadi ">
                            {twitter}
                            </a>
                        </li>     
                </ul>
        </div>
    );
}

export default LandingPage;
