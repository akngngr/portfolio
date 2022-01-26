import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'
import ContactMap from './ContactMap'


const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('yahoo', 'react-template', e.target, 'user_C9xoGbN4Sy6YTcodePzd7')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            });
        e.target.reset()
    }
    return (
        <div className="contact-container" id="contact">
            <ContactMap />
            
            <div className="contact-form-container">
            <div className="contact-map-card">
                <h1>I'm located in Nashua, NH.</h1>
                <h2>Available for Hybrid positions in New Hampshire & Massachusetts and Remote work in the US.</h2>
            </div>
                <form onSubmit={sendEmail} className="contact-form">
                    <div className="contact-left">
                        <input type="text" className="form-control" name="name" placeholder="Name" />
                        <input type="text" className="form-control" name="email" placeholder="Email Address" />
                    </div>
                    <div className="contact-right">
                        <textarea className="form-control form-subject" name="message" placeholder="Your message" />
                    </div>
                </form>
                <div className="contact-button">
                    <input type="submit" className="btn btn-resume" value="Send" />
                </div>
            </div>
        </div>
    )
}

export default Contact