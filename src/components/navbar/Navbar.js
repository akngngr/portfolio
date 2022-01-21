import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHSquare, faBox, faShareAlt, faAngleDoubleRight, faAdjust } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <div className="navbar">

            <div className="navbar-container">
                <div className="navbar-title">
                    <h1 className="navbar-title-text">Akin G.</h1><br />
                    <div className="navbar-icon-main" >
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </div>
                </div>
                <div className="navbar-item">
                    <div className="navbar-link">
                        <Link smooth to="#" className="link">
                            <FontAwesomeIcon icon={faHSquare} color="black" className="navbar-icon-primary navbar-icon-secondary" /><span className="navbar-text">Home</span></Link>
                    </div>
                    <div className="navbar-link">
                        <Link smooth to="/projects#projects" className="link">
                            <FontAwesomeIcon icon={faBox} color="black" className="navbar-icon-primary navbar-icon-secondary" /><span className="navbar-text">Projects</span></Link>
                    </div>
                    <div className="navbar-link">
                        <Link smooth to="/contact#contact" className="link">
                            <FontAwesomeIcon icon={faShareAlt} color="black" className="navbar-icon-primary navbar-icon-secondary" /><span className="navbar-text">Contact</span></Link>
                    </div>
                    <div className="navbar-link">
                        <a href="#">
                            <FontAwesomeIcon icon={faAdjust} color="black" className="navbar-icon-primary navbar-icon-secondary" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

