import mainBg from '../../assets/mainBg.mp4'
import { motion } from 'framer-motion'
import '../../App.css'

const videoVariants = {
    visible: {
        opacity: 1,
        filter: `blur(0)`,
    },
    dim: {
        opacity: 0.5,
        filter: `blur(5px)`,
        transition: {
            delay: 0.5,
            duration: 1.5,
            type: 'tween',
        }
    }
}

const Start = () => {
    return (
        <div className="main-bg" id="main-bg">
            {!mainBg ?
                'Your browser does not support the video.'
                :
                <motion.div
                    variants={videoVariants}
                    initial="visible"
                    animate="dim"
                >
                <video className="main-video" autoplay="true" loop="true">
                    <source src={mainBg} type="video/mp4" />
                </video>
                </motion.div>
            }
        </div>
    )
}

export default Start
