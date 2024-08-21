import React from 'react'
import Link from 'next/link'
import TextAnimations from '../../Animation/TextAnimation'
import ScaleAnimation from '../../Animation/ScaleAnimation'
import { useLocale, useTranslations } from 'next-intl'
interface HeroText {
    titleh1?: string,
    titleh2?: string,
    description: string,
    FaqLink: string
}
const HeroText = ({ titleh1, titleh2, description, FaqLink }: HeroText) => {
    const t = useTranslations()
    const local = useLocale()
    const shadowStyle: string = local === "fa" ? "drop-shadow-2xl" : "textShadow"
    return (
        <div className='h-full space-y-4 md:space-y-6 lg:space-y-10 text-white grid place-content-center pt-[5vmax]'>
            {
                titleh1 &&
                <TextAnimations
                    once
                    typeAnimation='typing'
                    text={titleh1}
                    duration={1}
                    staggerTime={0.02}
                    el='h1'
                    childClass={`xl:text-9xl md:text-7xl sm:text-5xl text-3xl font-bold ${shadowStyle}`}
                    textClass='text-center md:w-[80%] w-[90%] mx-auto'
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
                    childClass={`xl:text-7xl md:text-5xl sm:text-3xl text-xl ${shadowStyle}`}
                    textClass='text-center mx-auto md:w-[70%] w-[80%]'
                />
            }
            <TextAnimations
                once
                typeAnimation='typing'
                text={description}
                staggerTime={0.005}
                delay={titleh1 && titleh2 ? 2 : titleh1 || titleh2 ? 1 : 0}
                childClass={`xl:text-3xl md:text-xl sm:text-lg text-sm ${shadowStyle}`}
                textClass='text-center md:w-[50%] w-[70%] mx-auto'

            />
            <ScaleAnimation
                delay={titleh1 && titleh2 ? 3 : titleh1 || titleh2 ? 2 : 1}
                scaleVal
                once
                boxClass='md:w-[30%] w-[55%] mx-auto'
            >
                <Link
                    href={FaqLink}
                    className='w-full btn text-primary lg:btn-lg capitalize hover:bg-primary bg-white heroBtnText'>
                    {t("HeroBtn")}
                </Link>
            </ScaleAnimation>
        </div>
    )
}

export default HeroText