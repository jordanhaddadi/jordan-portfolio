import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: "#085943"}}/>;
const gitHub = <FontAwesomeIcon icon={faGithub} size="lg" style={{color: "#000000"}}/>;
const twitter = <FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#2706e5"}}/>;
const email = <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color:"#ed84b7"}}/>;

export const ContactSection = () => {
        return (
            <div className="contact">
                <div className="contact-wrapper">
                    <h1 id="contact-h1">drop me a line</h1>
                    <ul className="contact-links">
                        <li id="contact-li">
                            <a href="mailto:jordanhaddadi@gmail.com">
                            {email}
                            </a>
                        </li> 
                        <li id="contact-li">
                            <a href="https://www.linkedin.com/in/jordan-haddadi/">
                            {linkedIn}
                            </a>
                        </li>
                        <li id="contact-li">
                            <a href="https://github.com/jordanhaddadi">
                            {gitHub}
                            </a>
                        </li>
                        <li id="contact-li">
                            <a href="https://twitter.com/johaddadi ">
                            {twitter}
                            </a>
                        </li>         
                    </ul>
                </div>      
            </div>
       )
    };

export default ContactSection;