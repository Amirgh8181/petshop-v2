import React from 'react'
import OpacityContent from '../../Animation/OpacityContent'
import TranslateAnimation from '../../Animation/TranslateAnimation'

interface HeroText {
    titleh1?: string,
    titleh2?: string,
    description: string
}
const HeroText = ({ titleh1, titleh2, description }: HeroText) => {

    return (
        <TranslateAnimation
            once
            duration={2}
            yVal={-40}
            boxClass='w-full md:h-screen h-[50vh]  flex justify-center items-center md:order-1 order-2'
        >
            <div className='w-full flex flex-col items-center justify-center md:text-start text-center
         text-white p-4 md:p-8 mt-4 space-y-4'>
                {titleh1 && <h1 className='w-full md:w-[80%] md:text-7xl sm:text-5xl text-3xl font-bold'>{titleh1}</h1>}
                {titleh2 && <h2 className='w-full md:w-[80%] md:text-2xl sm:text-xl text-lg'>{titleh2}</h2>}
                <h6 className='font-medium md:w-[80%] md:text-base text-sm'>
                    {description}
                </h6>
            </div>
        </TranslateAnimation>
    )
}

export default HeroText