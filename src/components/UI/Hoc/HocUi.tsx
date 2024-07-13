import { StaticImageData } from 'next/image'
import React from 'react'
import TextAnimations from '../Animation/TextAnimation'
import ScaleAnimation from '../Animation/ScaleAnimation'
import StaticImageCopm from '../StaticImage'
import { useLocale } from 'next-intl'


interface HocUiProps {
    text: string,
    text1: string | string[],
    leftImage: StaticImageData,
    mainImage: StaticImageData,
    rightImage: StaticImageData
}

const HocUi = ({ text, text1, rightImage, mainImage, leftImage }: HocUiProps) => {
    const local = useLocale()
    return (
        <div className='order-1 md:order-2 md:sticky md:top-[7vmax] md:self-start md:w-1/2 w-full md:h-auto grid place-items-center py-[10vmax] md:py-0'>
            <div className='relative md:h-[80vh] h-[70vh] w-[80%] bg-primary rounded-badge p-4 mx-auto'>
                <div className='flex flex-col justify-center md:px-6 px-3 h-1/2 space-y-3'>
                    <TextAnimations
                        once
                        text={text}
                        typeAnimation='typing'
                        boxClass='text-4xl md:text-5xl font-bold' />
                    <TextAnimations
                        once
                        delay={1}
                        duration={0.5}
                        typeAnimation='lineOpacity'
                        text={text1}
                        boxClass='w-3/4 text-sm md:text-lg text-pretty leading-4' />
                </div>

                <div className='h-[110%] w-[105%] absolute inset-0'>
                    <ScaleAnimation
                        scaleVal
                        boxClass={`absolute ${local === "fa" ? 'md:-right-[2vmax] -right-[6vmax]' : 'md:-left-[4vmax] -left-[6vmax]'} bottom-[20vh] animate-bounce`}
                        delay={2.5}
                        once
                    >
                        <StaticImageCopm img={leftImage} imgAlt='main-login' imgClass='scale-50' />
                    </ScaleAnimation>

                    <ScaleAnimation
                        scaleVal
                        boxClass={`absolute bottom-0 ${local === "fa" ? 'left-0' : 'right-0'} flex justify-end`}
                        delay={2}
                        once
                    >
                        <StaticImageCopm img={mainImage} imgAlt='main-login' imgClass={`${local === "fa" && 'rotateY'} w-[90%]`}
                        />
                    </ScaleAnimation>

                    <ScaleAnimation
                        scaleVal
                        boxClass={`absolute  ${local === "fa" ? 'md:-left-[2vmax] -left-[7vmax]' : 'md:-right-[2vmax] -right-[7vmax]'} top-[15vh] animate-bounce`}
                        delay={2.5}
                        once
                    >
                        <StaticImageCopm img={rightImage} imgAlt='main-login' imgClass='scale-50' />
                    </ScaleAnimation>

                </div>
            </div>
        </div>
    )
}

export default HocUi