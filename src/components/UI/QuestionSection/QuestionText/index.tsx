
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'

const QuestionText = () => {
    const t = useTranslations("Index.Test")
    const loremT = useTranslations("loremContent")
    return (
        <div className='flex flex-col md:text-start text-center text-white md:space-y-8 space-y-4 px-2'>
            <h2 className='md:text-5xl text-3xl font-bold'>{t("title")}</h2>
            <p className='md:text-base text-sm md:w-[80%] '>
                {loremT("half lorem")}
            </p>
            <div className='w-full aspect-[9/1] md:space-x-4 flex '>
                <Link href={'/Question'} className='md:w-1/2 w-full aspect-[10/3] btn'>
                {t("start")}
                </Link>
            </div>
        </div>
    )
}

export default QuestionText;


