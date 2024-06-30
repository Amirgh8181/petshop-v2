import React from 'react'
import { motion } from "framer-motion"

interface ScaleYBoxProps {
    boxClass: string
    children: React.ReactNode
}
const ScaleYBox = ({ boxClass, children }: ScaleYBoxProps) => {
    const sclaeYVariant = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.75,
                when: "beforeChildren"
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.75,
                when: 'afterChildren'
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