import React from 'react'
import HeroContainer from '../Hero/HerosContainer/HeroContainer'
import HeroImage from '../Hero/HeroImg'
import HeroText from '../Hero/HeroText'

export const ClinicsAndSheltersHero = ({ img }: { img: string }) => {
    return (
        <HeroContainer>
            <HeroText
                titleh2='culpa qui officia deserunt '
                description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur Excepteur sint.'
            />


            <HeroImage
                mainImage={img}
            />
        </HeroContainer>
    )
}

