"use client"
import { useRef } from 'react'
import { animationComponentProps } from './ScaleAnimation'
import { motion, useInView } from "framer-motion"

const OpacityContent = ({ boxClass, children, delay, duration, whenAnimate, whenExit, amountView, once }: animationComponentProps) => {
    const opacityRef = useRef(null)
    const isInView = useInView(opacityRef, { amount: amountView ?? 0.5, once })
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
        <motion.div
            ref={opacityRef}
            className='w-full h-auto '
            initial='initial'
            animate={isInView ? 'animate' : "initial"}
            exit='exit'
        >
            <motion.div
                className={boxClass}
                variants={opacityVariant}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

export default OpacityContent