"use client"
import { notFound } from 'next/navigation'
import { CustomRadio } from '../CustomRadio'
import { useQuestionScore } from '@/src/stores/Question/useQuestionScore'
import StartQuestion from '../StartQuestion'
import EndQuestion from '../EndQuestion'
import { questionData } from '../data'
import { useTranslations } from 'next-intl'

const QuestionContainer = () => {

    const { QuestionScore, QuestionNumber, setQuestionState, setQuestionFinalScore, setStartQuestion, setRefreshQuestion } = useQuestionScore()
    const t = useTranslations("PersonalityTest.questionData")

    const handleQusetionRadio = (questionValue: number) => {
        setQuestionState(questionValue)

        if (QuestionNumber + 1 === 11) {
            setQuestionFinalScore()
        }
        else {
            notFound()
        }

    }

    return (
        <div className='w-[90%] h-full space-y-4 xl:space-y-8 flex flex-col justify-center items-center mx-auto' id='questionFaq'>
            {QuestionNumber === 0
                ?
                <StartQuestion startQuestion={setStartQuestion} />
                :
                QuestionNumber <= 10 && QuestionNumber >= 1
                    ?
                    <div className='w-[80%] space-y-4 mx-auto'>
                        <h4>
                            {QuestionNumber} - {t(questionData[QuestionNumber].question)}
                        </h4>
                        <CustomRadio Score={1} title={t(questionData[QuestionNumber][1])} number={1} handleQuestion={handleQusetionRadio} />
                        <CustomRadio Score={2} title={t(questionData[QuestionNumber][2])} number={2} handleQuestion={handleQusetionRadio} />
                        <CustomRadio Score={3} title={t(questionData[QuestionNumber][3])} number={3} handleQuestion={handleQusetionRadio} />
                        <CustomRadio Score={4} title={t(questionData[QuestionNumber][4])} number={4} handleQuestion={handleQusetionRadio} />
                    </div>
                    :
                    QuestionNumber === 11 &&
                    <EndQuestion QuestionScore={QuestionScore} refreshQuest={setRefreshQuestion} />
            }

            <progress
                
                className="progress progress-primary w-[70%] mx-auto mt-4"
                value={
                    QuestionNumber < 11 && QuestionNumber > 0
                        ? `${QuestionNumber * 10 - 10}`
                        : QuestionNumber === 11 ? "100"
                            : "0"
                }
                max="100"
            />

        </div>
    )
}

export default QuestionContainer
