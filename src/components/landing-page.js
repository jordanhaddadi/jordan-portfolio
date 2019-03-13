import React from 'react';
import About from './about.js';
import AboutSection from './about-normal';
import Contact from './contact';
import ContactSection from './contact-normal';
import Portfolio from './portfolio';
import Resume from './resume';
import ScrollIntoView from 'react-scroll-into-view';
import portfolioData from '../portfolioData';
import '../styles/landing.css';


{/* for mobile device users -- brings how-to footer into focus */}
                    {/* <ScrollIntoView selector=".how-to">
                        <button>How does it work?</button>
                    </ScrollIntoView> */}

export const LandingPage = () => {

    return (
        <div className="home">
            <div className="landing-top">
                <div className='landing-content'>
                    <div className='landing-text'>
                        <h1>{portfolioData.name}</h1>
                        <p id="role">{portfolioData.role}</p>
                        <div className="nav">
                             <ScrollIntoView selector=".landing-about">
                                <button>About</button>
                            </ScrollIntoView>
                            <ScrollIntoView selector=".landing-contact">
                                <button>Contact</button>
                            </ScrollIntoView>
                            <Resume />
                        </div>
                        <p id="role-description">{portfolioData.roleDescription}</p>
                    </div>        
                </div>
            </div>
            <div className="landing-portfolio">
                <Portfolio />
            </div>
            <div className="landing-about">
                <AboutSection />
            </div>
            <div className="landing-contact">
                <ContactSection />
            </div>
        </div>
    );
}

export default LandingPage;
