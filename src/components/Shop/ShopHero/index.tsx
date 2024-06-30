
import HeroImage from '@/src/components/UI/Hero/HeroImg'
import HeroText from '@/src/components/UI/Hero/HeroText'
import HeroContainer from '@/src/components/UI/Hero/HerosContainer/HeroContainer'
import React from 'react'

const ShopHero = () => {
    return (
        <HeroContainer>
              <HeroText
                titleh2='Enjoy 15% of money'
                description='Food that is healthy for your kitty'
                />
            <HeroImage
                animateImg={false}
                mainImage='/images/Shop/hero.png'
                width='max-w-[80%]'
            />
        </HeroContainer>
    )
}

export default ShopHero


