import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faEnvelope } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'


const ContactButton = () => {
    return (
        <div className="contact-button-container">
            <ul className="contact-button-list-container">

                <li className="contact-button-icon-container">
                <a href="https://github.com/akngngr" target="_blank" className="contact-button-link">
                <FontAwesomeIcon
                icon={faGithubSquare}
                className="contact-icon"
                />                
                </a>
                </li>
                
                <li className="contact-button-icon-container">
                <a href="https://linkedin.com/in/akngngr" target="_blank" className="contact-button-link">
                <FontAwesomeIcon
                icon={faLinkedin}
                className="contact-icon"
                />
                </a>
                </li> 
                
                <li className="contact-button-icon-container" >
                <a href="#contact" className="contact-button-link">
                <FontAwesomeIcon
                icon={faEnvelopeOpen}
                className="contact-icon"
                />
                </a>
                </li>
                
            </ul>
        </div>
    )
}

export default ContactButton
