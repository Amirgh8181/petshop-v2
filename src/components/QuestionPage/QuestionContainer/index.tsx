"use client"
import { notFound } from 'next/navigation'
import { useState } from 'react'
import { CustomRadio } from '../CustomRadio'
import { useQuestionScore } from '@/src/stores/Question/useQuestionScore'
import StartQuestion from '../StartQuestion'
import EndQuestion from '../EndQuestion'
import { questionData } from '../data'
import { useTranslations } from 'next-intl'

const QuestionContainer = () => {

    const { QuestionScore, QuestionNumber, setQuestionState, setQuestionFinalScore, setStartQuestion, setRefreshQuestion } = useQuestionScore()
    const t = useTranslations("PersonalityTest.question")

    const handleQusetionRadio = (questionValue: number) => {
        setQuestionState(questionValue)

        if (QuestionNumber + 1 === 21) {
            setQuestionFinalScore()
        }
        else {
            notFound()
        }

    }

    return (
        <div className='w-full flex flex-col items-center space-y-4'>

            {QuestionNumber === 0
                ?
                <StartQuestion startQuestion={setStartQuestion} />
                :
                QuestionNumber <= 20 && QuestionNumber >= 1
                    ?
                    <div className='w-[80%] space-y-4'>
                        <CustomRadio Score={5} title={t(questionData[QuestionNumber][5])} number={1} handleQuestion={handleQusetionRadio} />
                        <CustomRadio Score={10} title={t(questionData[QuestionNumber][10])} number={2} handleQuestion={handleQusetionRadio} />
                        <CustomRadio Score={15} title={t(questionData[QuestionNumber][15])} number={3} handleQuestion={handleQusetionRadio} />
                        <CustomRadio Score={20} title={t(questionData[QuestionNumber][20])} number={4} handleQuestion={handleQusetionRadio} />
                    </div>
                    :
                    QuestionNumber === 21 &&
                    <EndQuestion QuestionScore={QuestionScore} refreshQuest={setRefreshQuestion} />
            }

            <progress className="progress progress-primary w-[70%]"
                value={
                    QuestionNumber < 21 && QuestionNumber > 0
                        ? `${QuestionNumber * 5 - 5}`
                        : QuestionNumber === 21 ? "100"
                            : "0"
                }
                max="100"
            />

        </div>
    )
}

export default QuestionContainer
