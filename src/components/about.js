import React, { useState, useRef, useEffect } from 'react';
import portfolioData from '../portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/about.css';

const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="lg" color="teal"/>;
const gitHub = <FontAwesomeIcon icon={faGithub} size="lg" color="black"/>;
const twitter = <FontAwesomeIcon icon={faTwitter} size="lg" color="blue"/>;

export const About = () => {
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

      const AboutModal = ({ title, onClose }) => {
        const modalRef = useRef(null);
  
        useEffect(() => clickOutside(modalRef, onClose))
  
          return (
              <div className="overlay">
                <div className="about-modal">
                    <div className="modal-guts">
                        <img src={window.location.origin + `${portfolioData.image}`} className="about-img"/>
                        <h1 id="about-h1">Who Am I?</h1>
                        <div className="content" ref={modalRef}>
                            <AboutSection />
                        </div>
                    </div>
                </div>
              </div>
            );
        } 

    const AboutSection = () => {
        return (
            <div className="about">
                <p id="about-me">{portfolioData.aboutme}</p>
                <h1 id="skills-h1">What are my skills?</h1>
                    <div className="skills">
                        <ul className="all-skills">
                        {
                            portfolioData.skills && portfolioData.skills.map((item)=>{
                                return(
                                <li className="skills-li">
                                    {item.skill}
                                </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                    <p id="connect">Don't be shy, say hi!</p>
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
                <p id="click-anywhere">click anywhere to close</p>
            </div>
       )
    };

    return (
        <div className='about'>
            <button className="about-button" id="about-button" onClick={() => setModalOpen('about')}>Learn More</button>
            {modalOpen && (
                <AboutModal
                    show={modalOpen === 'about'}
                    toggleModal={setModalOpen}
                    title="Jordan Elizabeth Haddadi"
                    onClose={onClose}
                />
            )}
        </div>
    );
}

export default About;