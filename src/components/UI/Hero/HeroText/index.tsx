import React from 'react'
import Link from 'next/link'
import TextAnimations from '../../Animation/TextAnimation'
import ScaleAnimation from '../../Animation/ScaleAnimation'
interface HeroText {
    titleh1?: string,
    titleh2?: string,
    description: string
}
const HeroText = ({ titleh1, titleh2, description }: HeroText) => {

    return (
        <div className='w-full h-full text-center flex items-center'>
            <div className='w-[80%] mx-auto space-y-4 p-4 text-center'>
                {
                    titleh1 &&
                    <TextAnimations
                        once
                        typeAnimation='typing'
                        text={titleh1}
                        duration={1}
                        staggerTime={0.02}
                        el='h1'
                        childClass='md:text-7xl sm:text-5xl text-3xl font-bold textShadow text-wrap'
                        textClass='text-center'
                    />
                }
                {
                    titleh2 &&
                    <TextAnimations
                        once
                        typeAnimation='typing'
                        text={titleh2}
                        staggerTime={0.02}
                        duration={1}
                        el='h2'
                        delay={titleh1 ? 1 : 0}
                        childClass='md:text-5xl sm:text-3xl text-xl textShadow'
                        textClass='text-center mx-auto w-[80%]'
                    />
                }
                <TextAnimations
                    once
                    typeAnimation='typing'
                    text={description}
                    staggerTime={0.005}
                    delay={titleh1 && titleh2 ? 2 : titleh1 || titleh2 ? 1 : 0}
                    childClass='md:text-lg text-sm textShadow text-center w-[70%]'
                    textClass='text-center w-[70%] mx-auto'

                />
                <ScaleAnimation
                    delay={titleh1 && titleh2 ? 3 : titleh1 || titleh2 ? 2 : 1}
                    scaleVal
                >
                    <Link
                        href={'/#categ'}
                        className='btn bg-transparent border-2 border-white text-white rounded-none capitalize hover:bg-primary'>
                        get started
                    </Link>
                </ScaleAnimation>
            </div>
        </div>
    )
}

export default HeroText