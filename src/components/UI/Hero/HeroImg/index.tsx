import { StaticImageData } from 'next/image'
import ScaleAnimation from '../../Animation/ScaleAnimation'
import StaticImageCopm from '../../StaticImage'
import TranslateAnimation from '../../Animation/TranslateAnimation'


interface HeroImageProps {
    mainImage: StaticImageData,
}
const HeroImage = ({ mainImage }: HeroImageProps) => {

    return (
        <div className='w-full h-full grid place-content-center'>
            <TranslateAnimation
                once
                duration={1}
                yVal={40}
                >
            
                <StaticImageCopm
                    img={mainImage}
                    imgAlt='hero-pic'
                    imgClass={`md:w-full w-[90%] sm:aspect-[square] aspect-[16/10] rounded-btn mx-auto 
                        object-contain scale-150 drop-shadow-xl`}
                />
            </TranslateAnimation>
        </div>
    )
}

export default HeroImage
