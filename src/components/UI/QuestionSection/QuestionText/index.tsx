
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'
import TranslateAnimation from '../../Animation/TranslateAnimation';

const QuestionText = () => {
    const t = useTranslations("Index.Test")
    return (
        <TranslateAnimation
            xVal={30}
            amountView={0.8}
            once
            boxClass='w-full h-full'
            childClass='flex flex-col justify-center md:text-start text-center text-white md:space-y-8 space-y-4 px-2 h-full'
        >
            <h2 className='md:text-5xl text-3xl font-bold'>{t("title")}</h2>
            <p className='xl:text-2xl md:text-base sm:text-sm text-xs md:w-[80%]'>
                {t("content")}
            </p>
            <Link href={'/Question'} className='md:w-1/2 w-full btn xl:text-2xl md:text-base text-sm'>
                {t("start")}
            </Link>
        </TranslateAnimation>
    )
}

export default QuestionText;


