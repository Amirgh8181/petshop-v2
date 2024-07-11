import React from 'react'

import { StaticImageData } from 'next/image'
import HeroContainer from './HerosContainer/HeroContainer'
import HeroText from './HeroText'
import HeroImage from './HeroImg'

interface HeroProps {
    bgImage: StaticImageData,
    img: StaticImageData,
    title?: string,
    title2?: string,
    desc?: string
}

export const Hero = ({ bgImage, img, title, title2, desc }: HeroProps) => {
    return (
        <HeroContainer
            img={bgImage}
        >
            <HeroText
                titleh1={title ?? ''}
                titleh2={title2 ?? ''}
                description={desc ?? ''}
            />


            <HeroImage
                mainImage={img}
            />
        </HeroContainer>
    )
}

{/*
    
                    titleh2='culpa qui officia deserunt '
                description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur Excepteur sint.'*/}