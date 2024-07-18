import { StaticImageData } from 'next/image'
import HocUi from '../HocUi'
import { useTranslations } from 'next-intl'

interface AuthHoc {
    children: React.ReactNode
    text: string,
    text1: string | string[],
    leftImage: StaticImageData,
    mainImage: StaticImageData,
    rightImage: StaticImageData,

}

const QuestionHoc = ({
    children, mainImage, leftImage, rightImage, text, text1
}: AuthHoc
) => {
        const t=useTranslations("loremContent")
    return (
        <div className='flex md:flex-row flex-col w-[95%] min-h-screen space-y-[6vmax] md:space-y-0 py-[7vmax]'>
            {/* left side of auth page */}
            <HocUi mainImage={mainImage} leftImage={leftImage} rightImage={rightImage} text={text} text1={text1} />


            {/* right side of auth page */}
            <div className='w-full md:w-[60%] grid place-content-center space-y-6 mt-12 '>
                <div className='w-[90%] text-center text-lg font-bold mx-auto'>
                    {t("half lorem")}
                </div>
                <div className='w-full flex items-center justify-center '>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default QuestionHoc


