import React from 'react'
import './Home.css'
import Card from '../card/Card'
import Avatar from '../../assets/avatar.png'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import ContactButton from '../contact/ContactButton'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.125,
    },
  },
}
const headerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.125,
      duration: 1,
    },
  },
}
const avatarVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.125,
      duration: 1,
      mass: 2,
      damping: 25,
    },
  },
}
const typewriterVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
}
const homeVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.125,
      duration: 1,
      type: 'spring',
      mass: 2,
      damping: 25,
    },
  },
}
const midVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 2,
    },
  },
}
const midSectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 2,
    },
  },
}
const caretDown = {
  hidden: {
    opacity: 0,
    y: '-10px',
  },
  visible: {
    opacity: 1,
    y: ['0px', '10px'],
    transition: {
      duration: 2,
      repeat: Infinity,
      type: 'spring',
      delay: 1.5,
    },
  },
}


const Home = () => {
  return (
    <div className="container">
      
      <motion.div
        className="home-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ContactButton />
        <motion.div
          className="home-header"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
           
          <div className="avatar">
          <div className="bio">
              <h2>Bio.</h2>
              <p>Lorem ipsum dolor sit amet 🌄</p>
              <p>Lorem ipsum dolor sit amet 🚗</p>
              <p>Lorem ipsum dolor sit amet ✈</p>
            </div>
            <div className="avatar-icon">
              <motion.img
                variants={avatarVariants}
                initial="hidden"
                animate="visible"
                src={Avatar}
                alt="Avatar"
                className="avatar-img"
              />
            </div>
            
            {/* <motion.div
              className="typewriter"
              variants={typewriterVariants}
              initial="hidden"
              animate="visible"
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1500)
                    .typeString('I love learning new technologies.')

                    .pauseFor(1000)
                    .deleteAll()

                    .typeString(
                      'Designing and developing unique web applications.',
                    )

                    .pauseFor(1000)
                    .deleteAll()

                    .typeString('A true animal lover!')

                    .pauseFor(1000)
                    .deleteAll()

                    .typeString('Love to meet new people and make friends.')

                    .pauseFor(1000)
                    .deleteAll()

                    .typeString('Outdoors forever!')

                    .start()
                }}
              />
            </motion.div> */}
          </div>
          
          <motion.div
            className="home-text"
            variants={homeVariants}
            initial="hidden"
            animate="visible"
          >
            <h2>HI THERE, I'M</h2>
            <h1><span className="name">AKIN</span> GUNGOR</h1>
            <p>Front-End Web Developer passionate about creating interactive applications and experiences on the web.</p>
            <a href="https://github.com/akngngr/akngngr.github.io/blob/main/resume/resume.pdf" className="btn btn-resume" target="_blank">Resume</a>
          </motion.div>
          
        </motion.div>
        <motion.div
            variants={caretDown}
            initial="hidden"
            animate="visible"
            className="caret"
          >
            <a
              href="#mid-section"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <FontAwesomeIcon
                icon={faCaretDown}
                className="caret-down"
                style={{ width: '60px', height: '60px' }}
              />
            </a>
          </motion.div>
        <motion.section
          className="mid-section"
          id="mid-section"
          variants={midSectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="summary"
            variants={midVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="summary-text">
              <motion.h2>
                Designing and building eye catching Web applications and
                reusable components to bring ideas into reality is one of my
                great skills.
              </motion.h2>
            </div>
          </motion.div>

          <motion.div
            className="card-container"
            variants={midVariants}
            initial="hidden"
            animate="visible"
          >
            <Card />
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default Home
