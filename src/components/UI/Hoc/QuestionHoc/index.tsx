import { StaticImageData } from 'next/image'
import { useLocale } from 'next-intl'
import HocUi from '../HocUi'

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
    const local = useLocale()

    return (
        <div className='flex md:flex-row flex-col w-[95%] min-h-screen space-y-[6vmax] md:space-y-0 py-[7vmax]'>
            {/* left side of auth page */}
            <HocUi mainImage={mainImage} leftImage={leftImage} rightImage={rightImage} text={text} text1={text1} />


            {/* right side of auth page */}
            <div className='w-full md:w-[60%] grid place-content-center space-y-6 mt-12 '>
                <div className='w-[90%] text-center text-lg font-bold'>
                    The passage is attributed to an unknown typesetter in the 15th century whoMalorum for
                    use in a type specimen book?
                </div>
                <div className='w-full flex items-center justify-center '>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default QuestionHoc


