import React from 'react'
import { animationComponentProps } from './ScaleYBox'
import { motion } from "framer-motion"

const OpacityContent = ({ boxClass, children, delay, duration, whenAnimate, whenExit }: animationComponentProps) => {
    const opacityVariant = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: delay ?? 0,
                duration: duration ?? 0.5,
                when: whenAnimate ?? "beforeChildren"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                delay: delay ?? 0,
                duration: duration ?? 0.5,
                when: whenExit ?? 'afterChildren'
            }
        }
    }
    return (
        <motion.div className={boxClass}
            variants={opacityVariant}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            {children}
        </motion.div>
    )
}

export default OpacityContent