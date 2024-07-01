import React from 'react'
import heroImage from "@/public/images/hero/hero-big.png"
import { WaveBg } from '@/src/assets/svgs'
import Image from 'next/image'
import TextAnimations from '../../UI/Animation/TextAnimation'
import ScaleAnimation from '../../UI/Animation/ScaleAnimation'
const HeroSection = () => {



  return (
    <div
      className='w-full h-screen flex justify-center items-center relative snap-center'
    >
      <WaveBg className="w-full h-[105%] absolute inset-0 text-primary" />
      <div className="hero  w-[80%] h-[80%] glass rounded-box mt-[4vmax]">
        <div className="w-full h-full hero-content flex-col lg:flex-row-reverse">
          <ScaleAnimation duration={0.75} delay={1.5} once scaleVal boxClass='md:w-1/2 md:h-full h-1/2 w-full flex justify-center items-center'>
            <Image
              src={heroImage} width={heroImage.width} height={heroImage.height} alt='heroImage'
              className="md:w-[90%] w-[70%] aspect-square object-contain mx-auto" />
          </ScaleAnimation>
          <div className='md:w-1/2 md:h-full h-1/2 w-full flex flex-col justify-center text-center p-4'>
            <TextAnimations
              text='Box Office News!'
              boxClass='md:text-5xl text-2xl font-bold w-full'
              el='h1'
              staggerTime={0.1}
              duration={0.1}
              typeAnimation='typing'
              once
            />
            <TextAnimations
              text={[
                'Provident cupiditate voluptatem et in. ',
                "Quaerat fugiat ut assumenda excepturi ",
                "exercitationem   quasi. In deleniti ",
                "eaque aut repudiandae et a id nisi. "
              ]}
              boxClass='py-6 w-[50%] md:text-base text-xs w-full'
              staggerTime={0.1}
              duration={0.75}
              delay={1.5}
              once
              typeAnimation='lineOpacity'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection




{/*



*/}