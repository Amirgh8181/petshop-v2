import Image from 'next/image'
import ScaleAnimation from '../../Animation/ScaleAnimation'


interface HeroImage {
    mainImage: string,
}
const HeroImage = ({ mainImage }: HeroImage) => {

    return (
        <ScaleAnimation once delay={1} scaleVal boxClass='w-full h-full md:order-2 order-1 flex justify-center items-center'>
                <Image
                    src={mainImage}
                    alt='hero-pic'
                    width={500}
                    height={500}
                    priority={true}
                    quality={100}
                    className={`w-[90%] aspect-square mx-auto`}
                />
        </ScaleAnimation>
    )
}

export default HeroImage
