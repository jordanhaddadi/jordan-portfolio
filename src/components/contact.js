import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import '../styles/contact.css';

const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: "#085943"}}/>;
const gitHub = <FontAwesomeIcon icon={faGithub} size="lg" style={{color: "#000000"}}/>;
const twitter = <FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#2706e5"}}/>;
const email = <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color:"#ed84b7"}}/>;

export const Contact = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const onClose = () => setModalOpen(false);

    const clickOutside = (ref, onClose) => {
        const statusChange = (e) => {
            if (!ref.current.contains(e.target)){
                setModalOpen(modalOpen)
                onClose();
            }
        }
        document.addEventListener('click', statusChange)
        return function cleanup() {
            document.removeEventListener('click', statusChange)
        }
    }

      const ContactModal = ({ title, onClose }) => {
        const modalRef = useRef(null);
  
        useEffect(() => clickOutside(modalRef, onClose))
  
          return (
              <div className="overlay">
                <div className="contact-modal">
                    <div className="contact-guts">
                        <h1 id="contact-h1">drop me a line</h1>
                        <div className="content" ref={modalRef}>
                            <ContactSection />
                        </div>
                    </div>
                </div>
              </div>
            );
        } 

    const ContactSection = () => {
        return (
            <div className="contact">
                <div className="contact-wrapper">
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
                    
                    
                <p id="click-anywhere">click anywhere to close</p>
            </div>
       )
    };

    return (
        <div className='contact'>
            <button className="contact-button" id="contact-button" onClick={() => setModalOpen('contact')}>Contact</button>
            {modalOpen && (
                <ContactModal
                    show={modalOpen === 'contact'}
                    toggleModal={setModalOpen}
                    title="Message Me"
                    onClose={onClose}
                />
            )}
        </div>
    );
}

export default Contact;