
import Link from 'next/link';
import React from 'react'

const QuestionText = () => {
    return (
        <div className='flex flex-col md:text-left text-center text-white md:space-y-8 space-y-4 px-2'>
            <h2 className='md:text-3xl text-xl font-bold'>Personality Test</h2>
            <p className='md:text-base text-sm w-[80%]'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur Excepteur sint.
            </p>
            <div className='w-full aspect-[9/1] md:space-x-4 flex '>
                <Link href={'/Question'} className='md:w-1/2 w-full aspect-[10/3] btn'>
                    Start Test
                </Link>
            </div>
        </div>
    )
}

export default QuestionText;


