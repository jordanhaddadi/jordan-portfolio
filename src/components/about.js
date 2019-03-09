import React, { useState, useRef, useEffect } from 'react';
import portfolioData from '../portfolioData';

import '../styles/about.css';

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
                        <h1 id="about-h1">About Me</h1>
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
                    
                    
                <p id="click-anywhere">click anywhere to close</p>
            </div>
       )
    };

    return (
        <div className='about'>
            <button className="about-button" id="about-button" onClick={() => setModalOpen('about')}>About</button>
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