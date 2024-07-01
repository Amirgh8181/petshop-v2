
import HeroImage from '@/src/components/UI/Hero/HeroImg'
import HeroText from '@/src/components/UI/Hero/HeroText'
import HeroContainer from '@/src/components/UI/Hero/HerosContainer/HeroContainer'
import React from 'react'

const ShopHero = () => {
    return (
        <HeroContainer>
            <div className='heroSection'>
                <HeroText
                    titleh1='Buy and Enjoy'
                    titleh2='Enjoy 15% of money'
                    description='Food that is healthy for your kitty'
                />
            </div>
            <div className='heroSection'>
                <HeroImage
                    mainImage='/images/Shop/hero.png'
                />
            </div>
        </HeroContainer>
    )
}

export default ShopHero


/*


*/