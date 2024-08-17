"use client"
import { signIn, useSession } from "next-auth/react"
import { useTranslations } from "next-intl"

const StartQuestion = ({ startQuestion }: { startQuestion: () => void }) => {
    const t = useTranslations("PersonalityTest")
    const { data: session } = useSession()

    const isStasrt = () => {
        session ? startQuestion() : signIn()
    }

    return <button onClick={isStasrt}
        className='btn w-[80%] bg-primary xl:text-xl md:text-lg text-sm py-2 text-nowrap'
    >
        {t("start")}
    </button>

}

export default StartQuestion