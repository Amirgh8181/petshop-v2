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
            animal = animalNameT('hamster')
        }

        else if (arg <= 400 && arg > 300) {
            animal = animalNameT('parrot')
        }
        return animal
    }
    return (
        <div className='w-full grid place-content-center space-y-4 text-center'>
            <p className='text-2xl font-bold'>{t("score")}</p>
            <p className='text-2xl font-bold'>{QuestionScore}</p>
            <p className='text-2xl font-bold'>{t("animal")}</p>
            <p className='text-2xl font-bold'>{showAnimal(QuestionScore)}</p>


            <Link
                className='w-[80%] aspect-[11/1] btn bg-primary text-lg mx-auto'
                href='/'
                onClick={refreshQuest}
            >
                {t("home")}
            </Link>
        </div>
    )
}

export default EndQuestion