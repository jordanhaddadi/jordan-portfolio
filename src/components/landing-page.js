import React from 'react';
import AboutSection from './about-normal';
import TechSection from './tech';
import ContactSection from './contact-normal';
import Nav from './nav';
import Portfolio from './portfolio';
import ScrollIntoView from 'react-scroll-into-view';
import portfolioData from '../portfolioData';
import '../styles/landing.css';


export const LandingPage = () => {
    return (
        <div className="home">
            <div className="landing-top">
                <Nav />
                <div className='landing-content'>
                    <div className='landing-text'>
                        <h1>{portfolioData.name}</h1>
                        <p id="role">{portfolioData.role}</p>
                    </div>        
                </div>
            </div>
            <p id="role-description">{portfolioData.roleDescription}</p>
            <div className="landing-about">
                <AboutSection />
            </div>
            <div className="landing-portfolio">
                <Portfolio />
            </div>
            <div className="landing-tech">
                <TechSection />
            </div>
            <div className="landing-contact">
                <ContactSection />
            </div>
            <div className="back-to-top">
                <ScrollIntoView selector=".landing-top">
                    <button className="top-button">Back to the top</button>
                </ScrollIntoView>
            </div>
        </div>
    );
}

export default LandingPage;
