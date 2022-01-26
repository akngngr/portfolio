import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faAdjust } from '@fortawesome/free-solid-svg-icons'
import { navigations } from '../../data'

const Navbar = () => {
  const navigation = navigations.map((nav, id) => {
    return (
      <div key={id} className="navbar-link">
        <Link smooth to={nav.link} className="link">
          <FontAwesomeIcon
            icon={nav.icon}
            color="black"
            className="navbar-icon-primary navbar-icon-secondary"
          />
          <span className="navbar-text">{nav.name}</span>
        </Link>
      </div>
    )
  })

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <h1 className="navbar-title-text">AG</h1>
          <br />
          <div className="navbar-icon-main">
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </div>
        </div>
        <div className="navbar-item">
          {navigation}
          <div className="navbar-link">
            <a href="#">
              <FontAwesomeIcon
                icon={faAdjust}
                color="black"
                className="navbar-icon-primary navbar-icon-secondary"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
