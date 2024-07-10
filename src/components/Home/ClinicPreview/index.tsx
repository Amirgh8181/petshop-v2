import React from 'react'
import rightImg from "@/public/images/Clinics/preview/rightPreviewImg.png"
import leftImg from "@/public/images/Clinics/preview/leftPreviewImg.png"
import Link from 'next/link'
import TextAnimations from '../../UI/Animation/TextAnimation'
import ScaleAnimation from '../../UI/Animation/ScaleAnimation'
import StaticImageCopm from '../../UI/StaticImage'

const ClinicPreview = () => {
    return (
        <div className="w-full md:h-screen h-[50dvh] overflow-hidden grid md:place-content-center 
         text-center relative"
        >
            <ScaleAnimation
                scaleVal
                delay={1}
                childClass='w-[40%] absolute top-0 left-0 z-0'
                once
            >
                <StaticImageCopm
                    img={rightImg}
                    imgAlt='ClinicPreview'
                    imgClass='w-full aspect-square object-contain'
                />
            </ScaleAnimation>
            <div className='absolute inset-0 z-10 space-y-2 flex flex-col justify-end md:justify-center'>
                <TextAnimations
                    boxClass='text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-900'
                    typeAnimation='typing'
                    text={"your animal health"}
                    el='h1'
                    staggerTime={0.05}
                    duration={0.05}
                    once
                />
                <TextAnimations
                    boxClass='text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-900'
                    typeAnimation='typing'
                    text={"is our priority"}
                    el='h3'
                    staggerTime={0.05}
                    duration={0.05}
                    once
                />
                <ScaleAnimation
                    scaleVal
                    delay={1}
                    once
                >
                    <Link
                        href={"/Clinics"}
                        className='btn bg-primary capitalize !px-2 my-4'>
                        go and visit clinic
                    </Link>
                </ScaleAnimation>
            </div>
            <ScaleAnimation
                scaleVal
                delay={1}
                once
                childClass='w-[40%] absolute top-0 right-0 z-0'
            >
                <StaticImageCopm
                    img={leftImg}
                    imgAlt='ClinicPreview'
                    imgClass='w-full aspect-square object-contain scale-95' />
            </ScaleAnimation>



        </div>
    )
}

export default ClinicPreview


/*

*/