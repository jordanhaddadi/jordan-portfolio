import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {

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

    const LoginModal = ({ title, onClose }) => {
      const modalRef = useRef(null);

      useEffect(() => clickOutside(modalRef, onClose))

        return (
            <div className="overlay">
              <div className="modal">
                <h2>{title}</h2>
              </div>
            </div>
          );
      }             

  return(

  <div className="navbar">
    <ul className="nav-list">
        <div className='left-nav'> 
            <li className="nav-item">
                <Link to="/register" className="register-link">Register</Link>
            </li>
        </div>

        <div className='right-nav'>
                <li className="nav-item">
                    <button id="login-button" onClick={() => setModalOpen('login')}>Login</button>
                    {modalOpen && (
                        <LoginModal
                            show={modalOpen === 'login'}
                            toggleModal={setModalOpen}
                            title="Login to your RoadRate account"
                            onClose={onClose}
                        />
                    )}
                </li>
        </div>
    </ul>
  </div>
  )
}

export default Nav;