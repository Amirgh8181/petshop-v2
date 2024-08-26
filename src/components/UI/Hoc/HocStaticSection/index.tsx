import { StaticImageData } from 'next/image'
import React from 'react'
import TextAnimations from '../../Animation/TextAnimation'
import ScaleAnimation from '../../Animation/ScaleAnimation'
import StaticImageCopm from '../../StaticImage'
import { useLocale } from 'next-intl'
import HocBtn from '../../Button/HocBtn'


interface HocUiProps {
    text: string,
    text1: string | string[],
    leftImage: StaticImageData,
    mainImage: StaticImageData,
    rightImage: StaticImageData
    faqLink: string
}

const HocStaticSection = ({ text, text1, rightImage, mainImage, leftImage, faqLink }: HocUiProps) => {
    const local = useLocale()
    return (
        <div className='order-1 sm:order-2 md:w-[80%] w-full md:my-0 mx-auto relative'>
            <div className='xl:h-[60dvh] md:h-[80dvh] sm:h-[70dvh] h-[440px] w-[80%] sticky top-[13dvh] bg-primary rounded-badge p-4 mx-auto flex justify-center'>
                <div className='w-full inline-block relative z-10 space-y-3 mt-8'>
                    <TextAnimations
                        once
                        text={text}
                        typeAnimation='typing'
                        boxClass='text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-center'
                        textClass='text-center'
                    />
                    <TextAnimations
                        once
                        delay={1}
                        duration={0.5}
                        typeAnimation='lineOpacity'
                        text={text1}
                        boxClass='w-3/4 mx-auto text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'
                        textClass='text-center'
                    />
                    <HocBtn faqLink={faqLink}/>
                </div>

                <div className='h-full xl:w-[115%] w-[110%] absolute top-0 overflow-hidden'>
                    <ScaleAnimation
                        scaleVal
                        boxClass={`absolute  bottom-[20dvh] animate-bounce xl:w-[3vmax] md:w-[4vmax] sm:w-[5vmax] w-[7.5vmax]
                        ${local === "fa" ? 'right-0' : 'left-0'}`
                        }
                        delay={2.5}
                        once
                    >
                        <StaticImageCopm img={leftImage} imgAlt='left-hoc' imgClass='object-contain' />
                    </ScaleAnimation>

                    <ScaleAnimation
                        scaleVal
                        boxClass={`absolute bottom-0 w-full`}
                        delay={2}
                        once
                    >
                        <StaticImageCopm img={mainImage} imgAlt='main-hoc' imgClass={`${local === "fa" && 'rotateY'} w-[70%] object-contain mx-auto`}
                        />
                    </ScaleAnimation>

                    <ScaleAnimation
                        scaleVal
                        boxClass={`absolute top-[15dvh] animate-bounce xl:w-[3vmax] md:w-[4vmax] sm:w-[5vmax] w-[7.5vmax] 
                        ${local === "fa" ? 'left-0' : 'right-0'}`
                        }
                        delay={2.5}
                        once
                    >
                        <StaticImageCopm img={rightImage} imgAlt='right-hoc' imgClass='object-contain' />
                    </ScaleAnimation>

                </div>
            </div>
        </div>
    )
}

export default HocStaticSection

