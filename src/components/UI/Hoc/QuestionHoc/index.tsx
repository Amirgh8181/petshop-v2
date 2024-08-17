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
    const t = useTranslations("loremContent")
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 mt-[13dvh] mb-[5vmax] space-y-[8vmax] sm:space-y-0'>
            <HocUi
                mainImage={mainImage}
                leftImage={leftImage}
                rightImage={rightImage}
                text={text}
                text1={text1}
            />
            <div className='w-[90%] order-2 sm:order-1 space-y-4 xl:space-y-8 flex flex-col justify-center mx-auto'>
                <p className='text-center text-sm md:text-lg lg:text-xl xl:text-3xl'>
                    {t("half lorem")}
                </p>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default QuestionHoc


{/*


    */}