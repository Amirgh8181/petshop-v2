import { useTranslations } from 'next-intl'

interface QuestionHoc {
    children: React.ReactNode
}

const QuestionHoc = ({children}:{children: React.ReactNode}) => {
    const t = useTranslations("loremContent")
    return (
        <div className='w-[90%] order-2 sm:order-1 space-y-4 xl:space-y-8 flex flex-col justify-center mx-auto'>
            <p className='text-center hocTextSize3'>
                {t("half lorem")}
            </p>
            <div className='flex flex-col justify-center items-center space-y-4'>
                {children}
            </div>
        </div>
    )
}

export default QuestionHoc


{/*


    */}