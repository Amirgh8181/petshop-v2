import Link from 'next/link'
import React from 'react'

const EndQuestion = ({ QuestionScore, animal, refreshQuest }: { QuestionScore: number, animal: string, refreshQuest: () => void }) => {
    return (
        <div className='w-full grid place-content-center space-y-4'>
            <div className='text-lg font-bold'>your score:</div>
            <div className='text-lg font-bold'>{QuestionScore}</div>
            <div className='text-lg font-bold'>your best animal:{animal}</div>


            <Link
                className='w-[80%] aspect-[11/1] btn bg-primary text-lg mx-auto'
                href='/'
                onClick={refreshQuest}
            >
                go to Home
            </Link>
        </div>
    )
}

export default EndQuestion