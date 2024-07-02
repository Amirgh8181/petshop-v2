import QuestionHoc from '@/src/components/QuestionPage/QuestionHoc'
import Link from 'next/link'
import React from 'react'

const Question = () => {
  return (
      <QuestionHoc step={0}>
        <Link
          content='go to start question'
          className='w-[80%] aspect-[11/1] btn'
          href='/Question/1'
        >go to start question</Link>
      </QuestionHoc>
  )
}

export default Question