import QuestionContainer from '@/src/components/QuestionPage/QuestionContainer';
import QuestionHoc from '@/src/components/QuestionPage/QuestionHoc';
import React from 'react'

interface questionNumber {
    params: {
        QuestionNumber: string
    }
}

const QuestionNumber = ({ params }: questionNumber) => {


    return (
        <QuestionHoc step={Number(params.QuestionNumber)}>
            <QuestionContainer questionNumber={Number(params.QuestionNumber)} />
        </QuestionHoc>
    )
}

export default QuestionNumber