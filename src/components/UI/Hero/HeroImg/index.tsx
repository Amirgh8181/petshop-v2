import Image, { StaticImageData } from 'next/image'
import ScaleAnimation from '../../Animation/ScaleAnimation'
import StaticImageCopm from '../../StaticImage'


interface HeroImageProps {
    mainImage: StaticImageData,
}
const HeroImage = ({ mainImage }: HeroImageProps) => {

    return (
        <div className='w-full h-full grid place-content-center '>
            <ScaleAnimation
                once
                duration={1}
                scaleVal
                boxClass='w-full customRadus'>
                <StaticImageCopm
                    img={mainImage}
                    imgAlt='hero-pic'
                    imgClass={`w-[70%] aspect-square mx-auto mask mask-squircle md:mt-[3vmax] object-bottom`

                    }
                />
            </ScaleAnimation>
        </div>
    )
}

export default HeroImage
