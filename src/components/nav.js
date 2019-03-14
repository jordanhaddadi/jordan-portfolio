import React from 'react';
import Resume from './resume';
import ScrollIntoView from 'react-scroll-into-view';
import '../styles/nav.css';


export const Nav = () => {
    return (
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <ScrollIntoView selector="#about-h1">
                        <li><button className="about-button">About</button></li>
                    </ScrollIntoView>
                    <ScrollIntoView selector="#portfolio-h1">
                        <li><button className="portfolio-button">Portfolio</button></li>
                    </ScrollIntoView>
                    <ScrollIntoView selector=".tech-section">
                        <li><button className="about-button">Tech</button></li>
                    </ScrollIntoView>
                    <Resume />
                    <ScrollIntoView selector=".landing-contact">
                        <li><button className="contact-button">Contact</button></li>
                    </ScrollIntoView>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;