"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export interface animationComponentProps {
    boxClass?: string
    children: React.ReactNode
    delay?: number
    duration?: number
    whenAnimate?: string
    whenExit?: string
    amountView?: number,
    once?: boolean
    childClass?: string
}

interface scaleAnimationsProps extends animationComponentProps {
    scaleYVal?: boolean
    scaleXVal?: boolean
    scaleVal?: boolean
    stiffness?: number
    damping?: number
    ease?: [number, number, number, number]
}
const ScaleAnimation = ({
    boxClass,
    children,
    delay,
    duration,
    whenAnimate,
    whenExit,
    scaleYVal,
    scaleXVal,
    scaleVal,
    once,
    amountView,
    childClass,
    stiffness,
    damping,
    ease
}: scaleAnimationsProps) => {
    const scaleRef = useRef(null)
    const isInView = useInView(scaleRef, { amount: amountView ?? 0.5, once })
    const sclaeYVariant = {
        initial: {
            scaleY: scaleYVal ? 0 : 1,
            scaleX: scaleXVal ? 0 : 1,
            scale: scaleVal ? 0 : 1
        },
        animate: {
            scaleY: 1,
            scaleX: 1,
            scale: 1,
            transition: {
                delay: delay ?? 0,
                duration: duration ?? 0.75,
                when: whenAnimate ?? "beforeChildren",
                ease: ease ?? [.34,.55,.44,.72],
                type: stiffness ? "tween" : "spring",
                damping: damping ?? 10,
                stiffness: stiffness ?? 100,
            }
        },
        exit: {
            scaleY: scaleYVal ? 0 : 1,
            scaleX: scaleXVal ? 0 : 1,
            scale: scaleVal ? 0 : 1,
            transition: {
                duration: duration ?? 0.75,
                when: whenExit ?? 'afterChildren'
            }
        }
    }
    return (
        <motion.div
            ref={scaleRef}
            initial='initial'
            animate={isInView ? 'animate' : "initial"}
            exit='exit'
            className={boxClass}
        >
            <motion.div
                variants={sclaeYVariant}
                className={childClass}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

export default ScaleAnimation