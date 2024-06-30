import React from 'react'
import { delay, motion } from "framer-motion"

export interface animationComponentProps {
    boxClass?: string
    children: React.ReactNode
    delay?: number
    duration?: number
    whenAnimate?: string
    whenExit?: string
}
const ScaleYBox = ({ boxClass, children, delay, duration, whenAnimate, whenExit }: animationComponentProps) => {
    const sclaeYVariant = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transition: {
                delay: delay ?? 0,
                duration: duration ?? 0.75,
                when: whenAnimate ?? "beforeChildren"
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: duration ?? 0.75,
                when: whenExit ?? 'afterChildren'
            }
        }
    }
    return (
        <motion.div className={boxClass}
            variants={sclaeYVariant}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            {children}
        </motion.div>
    )
}

export default ScaleYBox