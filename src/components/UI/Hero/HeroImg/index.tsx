import { StaticImageData } from 'next/image'
import ScaleAnimation from '../../Animation/ScaleAnimation'
import StaticImageCopm from '../../StaticImage'
import TranslateAnimation from '../../Animation/TranslateAnimation'


interface HeroImageProps {
    mainImage: StaticImageData,
}
const HeroImage = ({ mainImage }: HeroImageProps) => {

    return (
        <div className='w-full grid place-content-center'>
            <TranslateAnimation
                once
                duration={1}
                yVal={40}
                >
            
                <StaticImageCopm
                    img={mainImage}
                    imgAlt='hero-pic'
                    imgClass={`w-full sm:aspect-[square] aspect-[16/10] rounded-btn mx-auto 
                        object-contain sm:scale-125 drop-shadow-2xl`}
                />
            </TranslateAnimation>
        </div>
    )
}

export default HeroImage
