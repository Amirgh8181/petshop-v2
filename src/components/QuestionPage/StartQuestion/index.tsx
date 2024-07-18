import { useTranslations } from "next-intl"

const StartQuestion = ({ startQuestion }: { startQuestion: () => void }) => {
    const t=useTranslations("PersonalityTest")
    return <button onClick={startQuestion}
        content='go to start question'
        className='w-[80%] aspect-[11/1] btn bg-primary text-lg'
    >
        {t("start")}
    </button>

}

export default StartQuestion