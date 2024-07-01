"use client"
import React from 'react'
import QuestionText from '../../UI/QuestionSection/QuestionText';
import QuestionImage from '../../UI/QuestionSection/QuestionImage';
import ScaleAnimation from '../../UI/Animation/ScaleAnimation';
const QuestionContainer = () => {

    return (
        <ScaleAnimation once amountView={0.5} scaleVal boxClass='w-full h-screen grid place-items-center'
        >
            <div className='w-[90%] h-auto p-8 flex flex-col md:flex-row items-center justify-center bg-primary space-y-4 md:space-y-0 rounded-3xl mx-auto'>


                <div
                    className='md:w-1/2 w-full md:h-full h-1/4 flex items-center justify-center'
                >
                    <QuestionText />
                </div>
                <div
                    className='md:w-1/2 w-full md:h-full h-3/4 flex items-center justify-center'
                >
                    <QuestionImage />
                </div>
            </div>
        </ScaleAnimation>
    )
}

export default QuestionContainer;


/*
import { motion } from 'framer-motion'
import QuestionText from '../UI/QuestionSection/QuestionText'
import QuestionImage from '../UI/QuestionSection/QuestionImage'

    const heroContainer = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.3,

            }
        }
    }


                    <QuestionImage />

*/