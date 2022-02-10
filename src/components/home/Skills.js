import React from 'react'
import Card from '../card/Card'
import { motion } from 'framer-motion'
import './Home.css'

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

const Skills = () => {
    return (
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
)};

export default Skills;

