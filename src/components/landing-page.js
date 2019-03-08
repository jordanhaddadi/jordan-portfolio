import React from 'react';
import About from './about.js';
import Contact from './contact';
import Portfolio from './portfolio';
import Resume from './resume';
import portfolioData from '../portfolioData';
import '../styles/landing.css';


export const LandingPage = () => {

    return (
        <div className="home">
            <div className="landing-top">
                <div className='landing-content'>
                    <div className='landing-text'>
                        <h1>{portfolioData.name}</h1>
                        <p id="role">{portfolioData.role}</p>
                        <div className="nav">
                            <About />
                            <Resume />
                            <Contact />
                        </div>
                        <p id="role-description">{portfolioData.roleDescription}</p>
                    </div>        
                </div>
            </div>
            <div className="landing-portfolio">
                <Portfolio />
            </div>
        </div>
    );
}

export default LandingPage;
