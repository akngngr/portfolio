import React from 'react'
import '../projects/Projects.css'
import { projects } from '../../data'

const Feature = () => {

  return (
    <div>
      <section className="feature-container">
        {projects.map((item) => (
          <div className="project">
            <div key={item.id} className="project-image-container">
              <video 
                className="project-image" 
                onMouseOver={(e) => e.target.play()} 
                onMouseOut={(e) => e.target.pause()}
                loop="true" 
                muted="true" 
              >
                  <source 
                    src={item.source.default} 
                    type="video/mp4"
                  />
              </video>
              </div>
              <div className="project-title-container">
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