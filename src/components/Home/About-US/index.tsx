import React from 'react'
import Image from 'next/image'
import TranslateAnimation from '../../UI/Animation/TranslateAnimation'
import image from "@/public/images/about-us/about-us.jpg"
import StaticImageCopm from '../../UI/StaticImage'
const AboutUs = () => {

    return (
        <div id='aboutUs' className='flex flex-col md:flex-row w-full items-center justify-center overflow-hidden'>
            <TranslateAnimation once duration={1} xVal={40} yVal={40} boxClass=' md:order-1 order-2 md:w-1/2 w-full md:h-full flex md:items-center items-start justify-center mt-4 md:mt-0'>

                <StaticImageCopm img={image} imgAlt='about-us'
                    imgClass='w-[70%] aspect-square mx-auto my-[2vmax] md:my-0 mask mask-heart'
                />
            </TranslateAnimation>
            <TranslateAnimation once duration={1} xVal={-40} yVal={-40} boxClass='order-1 md:order-2 md:w-1/2 w-full flex flex-col justify-center items-center md:items-start md:text-start text-center px-4'>
                <h2>About-Us</h2>
                <p className=' md:text-base md:mb-3 text-sm mb-2'>Duis aute irure </p>
                <p className='md:text-xl text-base mb-2 text-center md:text-left'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className='md:text-lg text-sm'>Duis aute irure dolor in reprehenderit</p>
            </TranslateAnimation>
        </div>
    )
}

export default AboutUs