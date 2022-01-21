import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'


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
            <div className="contact-map-container">
                <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d868357.4885204659!2d-71.94389404826255!3d42.620678207285984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1641356408827!5m2!1sen!2sus"
                    loading="lazy"
                    className="contact-map"
                />

            </div>
            <div className="contact-form-container">
                <form onSubmit={sendEmail} className="contact-form">
                    <div className="contact-left">
                        <input type="text" className="form-control" name="name" placeholder="Name" />
                        <input type="text" className="form-control" name="email" placeholder="Email Address" />
                    </div>
                    <div className="contact-right">
                        <textarea className="form-control form-subject" name="message" placeholder="Your message" />
                    </div>
                    <div className="contact-button">
                        <input type="submit" className="btn btn-info" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact