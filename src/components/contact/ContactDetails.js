import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'



const ContactDetails = (lat, lng) => {
  return (
    <div className="contact-details">
        <FontAwesomeIcon icon={faCircle} className="contact-map-icon" />
    </div>
    )
};

export default ContactDetails;
