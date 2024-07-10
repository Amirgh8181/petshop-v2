"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { animationComponentProps } from "./ScaleAnimation"

interface translateAnimationsProps extends animationComponentProps {
    yVal?: number
    xVal?: number
    stiffness?: number
    damping?: number
    ease?: [number, number, number, number]
}

const TranslateAnimation = ({
    children,
    boxClass,
    childClass,
    delay,
    duration,
    amountView,
    once,
    xVal,
    yVal,
    stiffness,
    damping,
    ease
}: translateAnimationsProps) => {
    const boxRef = useRef(null)
    const isInView = useInView(boxRef, { amount: amountView ?? 0.5, once })
    const translateVariant = {
        initial: {
            opacity: xVal || yVal ? 0 : 1,
            x: xVal ?? 0,
            y: yVal ?? 0
        },
        animate: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration ?? 0.75,
                delay: delay ?? 0,
                ease: ease ?? [.34,.55,.44,.72],
                type: stiffness ? "tween" : "spring",
                damping: damping ?? 10,
                stiffness: stiffness ?? 100,

            }
        },

    }


    return (

        <motion.div
            ref={boxRef}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delayChildren: delay ?? 0 }}
            className={boxClass}
        >
            <motion.div variants={translateVariant} className={childClass}>
                {children}
            </motion.div>
        </motion.div>



    )
}

export default TranslateAnimation