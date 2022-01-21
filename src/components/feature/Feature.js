import React from 'react'

import { projects } from '../../data'

const Feature = () => {
  const projectStyle = {
    maxWidth: '500px',
    maxHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'lightgrey',
    borderRadius: '15px',
    marginBottom: '5%'
  }
  const featureContainer = {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: 'RGBA(0,52,28,0.4)',
    flexWrap: 'wrap',
    gap: '10%',
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const projectImage = {
    width: '100%',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px 12px 0px 0px',
  }
  const projectImageContainer = {
    backgroundColor: 'rgba(230, 230, 230, 0.5)',
    width: '400px',
    height: '460px',
    boxShadow: '1px 10px 29px 11px rgba(0,0,0,0.75)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '5%',
    borderRadius: '15px'
  }

  return (
    <div>
      <section className="feature-container" style={featureContainer}>
        {projects.map((item) => (
          <div className="project" style={projectStyle}>
            <div key={item.id} className="project-image-container" style={projectImageContainer}>
              <img src={item.source.default} className="project-image" style={projectImage} alt="" />
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))
        }

      </section>
    </div>
  )
}

export default Feature