import HocStaticSection from './HocStaticSection'
import { StaticImageData } from 'next/image'

interface AuthHoc {
    children: React.ReactNode
    text: string,
    text1: string | string[],
    leftImage: StaticImageData,
    mainImage: StaticImageData,
    rightImage: StaticImageData,
    faqLink: string
}
const HocSection = ({
    children, mainImage, leftImage, rightImage, text, text1, faqLink
}: AuthHoc
) => {
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 mt-[13dvh] mb-[5vmax] space-y-[8vmax] sm:space-y-0'>
            <HocStaticSection
                mainImage={mainImage}
                leftImage={leftImage}
                rightImage={rightImage}
                text={text}
                text1={text1}
                faqLink={faqLink}
            />
            <div className='order-2 sm:order-1'>
                {children}
            </div>
        </div>
    )
}

export default HocSection