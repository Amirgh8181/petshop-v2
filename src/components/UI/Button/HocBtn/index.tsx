"use client"
import ScaleAnimation from '../../Animation/ScaleAnimation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const HocBtn = ({ faqLink }: { faqLink: string }) => {

    const t = useTranslations()
    return (
        <ScaleAnimation
            childClass='w-[60%] sm:hidden block mx-auto'
            scaleVal
            once
            delay={2.5}
        >
            <Link
                href={faqLink}
                className='btn w-full text-center bg-white dark:bg-black rounded-btn hocTextSize cursor-pointer'
            >
                {t("HocBtn")}
            </Link>
        </ScaleAnimation>

    )
}

export default HocBtn