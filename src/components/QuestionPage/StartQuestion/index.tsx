"use client"
import { signIn, useSession } from "next-auth/react"
import { useTranslations } from "next-intl"

const StartQuestion = ({ startQuestion }: { startQuestion: () => void }) => {
    const t = useTranslations("PersonalityTest")
    const { data: session } = useSession()
    console.log(session);

    const isStasrt = () => {
        session ? startQuestion() : signIn()
    }

    return <button onClick={isStasrt}
        content='go to start question'
        className='w-[80%] aspect-[11/1] btn bg-primary text-lg'
    >
        {t("start")}
    </button>

}

export default StartQuestion