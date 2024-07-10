import React from 'react'
import heroSide from "@/public/images/hero/heroSideImg.png"
import heroBottom from "@/public/images/hero/heroBottomImg.png"
import { WaveBg } from '@/src/assets/svgs'
import Image from 'next/image'
import TextAnimations from '@/src/components/UI/Animation/TextAnimation'
import ScaleAnimation from '@/src/components/UI/Animation/ScaleAnimation'
import { useLocale } from 'next-intl'


const HeroSection = () => {
  const local = useLocale()


  return (
    <div
      className='w-full md:h-screen h-[90dvh] flex justify-center items-center relative'
    >
      <WaveBg className="w-full md:h-[105%] h-[110%] absolute inset-0 text-primary xl:hidden" />
      <div className=" w-[90%] md:h-[85%] h-[70%] xl:h-[70%] glass rounded-box mt-[6vmax]">
        <div className='md:w-1/2 w-full md:h-1/2 flex flex-col justify-end md:text-left text-center p-6'>
          <TextAnimations
            text='Box Office News!'
            boxClass='md:text-5xl text-3xl font-bold md:w-[80%] w-full'
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
            boxClass='py-6 md:text-base text-sm md:w-[60%] w-full mx-auto md:mx-0'
            staggerTime={0.1}
            duration={0.75}
            delay={1}
            once
            typeAnimation='lineOpacity'
          />
        </div>
        <ScaleAnimation
          duration={0.75}
          delay={2}
          once
          scaleVal
          boxClass='hidden md:block'
          childClass={`absolute ${local === "fa" ? "left-0" : "right-0"} top-0`}>
          <Image
            src={heroSide} width={heroSide.width} height={heroSide.height} alt='heroImage'
            className={`w-full aspect-square object-cover ${local === "fa" && "rotateY"}`} />
        </ScaleAnimation>
        <ScaleAnimation
          duration={0.75}
          delay={1.5}
          once
          scaleVal
          boxClass='h-1/2 absolute bottom-0 right-0 left-0'
          childClass="h-full w-full absolute inset-0 origin-center">
          <Image
            src={heroBottom} width={heroBottom.width} height={heroBottom.height} alt='heroImage'
            className="object-contain w-full md:w-[90%] md:aspect-[16/4] aspect-[16/6] mx-auto absolute bottom-0 left-0 right-0" />
        </ScaleAnimation>
      </div>
    </div>
  )
}

export default HeroSection
