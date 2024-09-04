"use client"
import { signIn, useSession } from "next-auth/react"
import { useTranslations } from "next-intl"

const StartQuestion = ({ startQuestion }: { startQuestion: () => void }) => {
    const t = useTranslations("PersonalityTest.start")
    const { data: session } = useSession()

    const isStasrt = () => {
        session ? startQuestion() : signIn()
    }

    return (
        <>
            <h6 className="w-[90%] mx-auto text-center font-bold">{t("content")}</h6>
            <button onClick={isStasrt}
                className='questionBtn'
            >
                {t("btn")}
            </button>
        </>
    )

}

export default StartQuestion