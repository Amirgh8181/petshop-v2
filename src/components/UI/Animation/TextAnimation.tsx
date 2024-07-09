"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export interface TypingAnimationProps {
    text: string | string[]
    boxClass: string
    staggerTime?: number
    delay?: number
    el?: keyof JSX.IntrinsicElements
    duration?: number
    amountView?: number,
    once?: boolean
    typeAnimation: "typing" | "lineOpacity",
    childClass?:string
}

const TextAnimations = ({
    text,
    boxClass,
    delay,
    staggerTime,
    el: Wrapper = "p",
    duration,
    amountView,
    once,
    typeAnimation,
    childClass
}: TypingAnimationProps) => {
    const textArray: string[] = Array.isArray(text) ? text : [text]
    const boxRef = useRef(null)
    const isInView = useInView(boxRef, { amount: amountView ?? 0.5, once })
    const typingVariant = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration ?? 0
            }
        },

    }


    return (
        <Wrapper className={boxClass}>
            <span className="sr-only">{text}</span>
            <motion.span
                ref={boxRef}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ staggerChildren: staggerTime ?? 0.05, delayChildren: delay ?? 0 }}
                aria-hidden
                className={childClass}
            >

                {textArray.map(line =>

                    <span className="inline-block">
                        {typeAnimation === "typing" ?

                            line.split(" ").map(word =>
                                <span className="inline-block">
                                    {word.split("").map(char =>
                                        <motion.span className="inline-block" variants={typingVariant}>{char}</motion.span>
                                    )}
                                    <span>&nbsp;</span>
                                </span>
                            )

                            :
                            <motion.span className="inline-block" variants={typingVariant}>
                                {line}
                            </motion.span>
                        }

                    </span>
                )}

            </motion.span>
        </Wrapper>
    )
}

export default TextAnimations