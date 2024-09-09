"use client"
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const EndQuestion = ({ QuestionScore, refreshQuest }: { QuestionScore: number, refreshQuest: () => void }) => {
    const t = useTranslations("PersonalityTest.end")
    const animalNameT = useTranslations("PersonalityTest.animal")

    const showAnimal = (arg: number) => {
        let animal: string = ""
        if (arg <= 15 && arg >= 10) {
            animal = animalNameT('10-15')
        }
        else if (arg <= 25 && arg >= 16) {
            animal = animalNameT('16-25')
        }
        else if (arg <= 35 && arg >= 26) {
            animal = animalNameT('26-35')
        }

        else if (arg <= 40 && arg >= 36) {
            animal = animalNameT('36-40')
        }
        return animal
    }
    return (
        <div className='w-full grid place-content-center space-y-4 text-center'>
            <p className='endQuestionText'>{t("score")} {QuestionScore}</p>
            <p className='endQuestionText'>{t("animal")}</p>
            <p className='endQuestionText'>{showAnimal(QuestionScore)}</p>

            <Link
                className='questionBtn'
                href='/'
                onClick={refreshQuest}
            >
                {t("home")}
            </Link>
        </div>
    )
}

export default EndQuestion