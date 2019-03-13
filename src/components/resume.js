import React, { useState, useRef, useEffect } from 'react';
import portfolioData from '../portfolioData';
import '../styles/resume.css';


export const Resume = () => {

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

    const ResumeModal = ({ title, onClose }) => {
        const modalRef = useRef(null);
  
        useEffect(() => clickOutside(modalRef, onClose))

        return (
            <div className="overlay">
                <div className="resume-modal">
                    <div className="resume-guts">
                        <div className="resume-content" ref={modalRef}>
                            <ResumeSection />
                        </div>
                    </div>
                </div>
              </div>
        );
    }

    const ResumeSection = () => {
        return (
            <div className="resume">
            <img src={window.location.origin + `${portfolioData.resume}`} className="resume-img" alt="resume"/>
            </div>
        )
    }

    return (
        <div className='resume'>
            <button className="resume-button" id="resume-button" onClick={() => setModalOpen('resume')}>Resume</button>
            {modalOpen && (
                <ResumeModal
                    show={modalOpen === 'resume'}
                    toggleModal={setModalOpen}
                    title="Jordan Elizabeth Haddadi"
                    onClose={onClose}
                />
            )}
        </div>
    )
}

export default Resume;