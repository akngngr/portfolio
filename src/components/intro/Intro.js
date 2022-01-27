import { motion } from 'framer-motion'
import '../../App.css'
import letter from '../../assets/letterG.png'

const introVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
      opacity: 1,
      scale: [0.8, 1],
      transition: {
          delay: 0.5,
          duration: 3,
          type: 'tween',
      }
    }
}


const letterFollow = (e) => {
    const imgElem = document.querySelector('img')

    let x = e.clientX * 100 / window.innerWidth + 'px'
    let y = e.clientY * 100 / window.innerHeight + 'px'
    let z = window.innerWidth / window.innerHeight * 100 + 'px'

    imgElem.style.boxShadow = `inset ${x} ${y} ${z} rgba(255, 255, 255, 0.5),
    inset ${x} ${y} ${z} rgba(255, 255, 255, 0.5),
    inset ${x} ${y} ${z} rgba(0, 0, 0, 0.5)`

    
}

const loadPage = (e) => {
    const introElem = document.getElementById('main-bg')
    const letterElem = document.getElementById('letter-container')
    const bodyElem = document.querySelector('body')

    bodyElem.style.overflowY = 'visible'
    introElem.style.zIndex = '1'
    letterElem.style.display = 'none'
    
}

const Intro = () => {
    return (
        <motion.div 
          className="letter-container"
          variants={introVariants}
          initial="hidden"
          animate="visible"
          onMouseMove={letterFollow}
          id="letter-container"
        >
            <img src={letter} className="letter-image" alt="intro" onClick={loadPage} />
        </motion.div>
    )
}

export default Intro
