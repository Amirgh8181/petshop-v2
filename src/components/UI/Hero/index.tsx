import { StaticImageData } from 'next/image'
import HeroContainer from './HerosContainer/HeroContainer'
import HeroText from './HeroText'

interface HeroProps {
    bgImage: StaticImageData,
    title?: string,
    title2?: string,
    desc?: string
}

export const Hero = ({ bgImage, title, title2, desc }: HeroProps) => {
    return (
        <HeroContainer
            img={bgImage}
        >
            <HeroText
                titleh1={title ?? ''}
                titleh2={title2 ?? ''}
                description={desc ?? ''}
            />
        </HeroContainer>
    )
}
