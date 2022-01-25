import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import { skills } from '../../data'

function Card() {
    return (
        <div>
            <section className="card-list">
                {skills.map((skill) => (
                    <article key={skill.id} className="card">
                        <Link to={skill.link} className="card-link">
                            <header className="card-header">
                                <svg aria-hidden="true" focusable="true" data-prefix="fab" data-icon={skill.icon} className={"svg-inline--fa fa-" + skill.icon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="128 128 128 128"><path fill="currentColor" d={skill.d}></path></svg>
                                <h2>{skill.name}</h2>
                            </header>
                        </Link>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default Card