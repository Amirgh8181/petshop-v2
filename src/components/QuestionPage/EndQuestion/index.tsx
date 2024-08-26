"use client"
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const EndQuestion = ({ QuestionScore, refreshQuest }: { QuestionScore: number, refreshQuest: () => void }) => {
    const t = useTranslations("PersonalityTest.end")
    const animalNameT = useTranslations("PersonalityTest.animal")

    const showAnimal = (arg: number) => {
        let animal: string = ""
        if (arg === 100) {
            animal = animalNameT('cat')
        }
        else if (arg <= 200 && arg > 100) {
            animal = animalNameT('dog')
        }
        else if (arg <= 300 && arg > 200) {
            animal = animalNameT('duck')
        }

        else if (arg <= 400 && arg > 300) {
            animal = animalNameT('parrot')
        }
        return animal
    }
    return (
        <div className='w-full grid place-content-center space-y-4 text-center'>
            <p className='xl:text-3xl md:text-xl text-lg font-bold'>{t("score")} {QuestionScore}</p>
            <p className='xl:text-3xl md:text-xl text-lg font-bold'>{t("animal")} {showAnimal(QuestionScore)}</p>

            <Link
                className='btn w-[70vw] sm:w-[30vw] bg-primary xl:text-2xl md:text-lg text-sm mx-auto capitalize'
                href='/'
                onClick={refreshQuest}
            >
                {t("home")}
            </Link>
        </div>
    )
}

export default EndQuestion