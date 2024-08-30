import rightImg from "@/public/images/Clinics/preview/rightPreviewImg.png"
import leftImg from "@/public/images/Clinics/preview/leftPreviewImg.png"
import Link from 'next/link'
import TextAnimations from '../../UI/Animation/TextAnimation'
import ScaleAnimation from '../../UI/Animation/ScaleAnimation'
import StaticImageCopm from '../../UI/StaticImage'
import { useTranslations } from 'next-intl'

const ClinicPreview = () => {
    const t = useTranslations("Index.clinic")
    return (
        <div className="w-full xl:h-[60dvh] md:h-screen sm:h-[50dvh] h-[37dvh] overflow-hidden grid md:place-content-center relative customGlass mt-[8dvh] xl:rounded-box"
        >
            <ScaleAnimation
                scaleVal
                delay={0.75}
                childClass='w-[40%] absolute bottom-0 md:top-0 left-0 z-0'
                once
            >
                <StaticImageCopm
                    img={rightImg}
                    imgAlt='ClinicPreview'
                    imgClass='w-full aspect-square object-contain'
                />
            </ScaleAnimation>
            <ScaleAnimation
                scaleVal
                delay={0.75}
                once
                childClass='w-[40%] absolute bottom-0 md:top-0 right-0 z-0'
            >
                <StaticImageCopm
                    img={leftImg}
                    imgAlt='ClinicPreview'
                    imgClass='w-full aspect-square object-contain scale-95' />
            </ScaleAnimation>
            <div className='relative z-10 space-y-2 md:space-y-4 text-center md:text-white
                            md:bg-gradient-to-r from-petBlue to-darkPetBlue 
                            p-4 grid place-content-center rounded-box'
            >
                <TextAnimations
                    boxClass='text-3xl sm:text-4xl md:text-8xl font-bold'
                    typeAnimation='typing'
                    text={t("title")}
                    el='h1'
                    staggerTime={0.03}
                    duration={0.03}
                    once
                />
                <TextAnimations
                    boxClass='text-xl sm:text-3xl md:text-5xl font-bold mx-auto'
                    typeAnimation='typing'
                    text={t("title2")}
                    el='h3'
                    staggerTime={0.03}
                    duration={0.03}
                    once
                />
                <ScaleAnimation
                    scaleVal
                    delay={0.75}
                    once
                >
                    <Link
                        href={"/Clinics"}
                        className='btn bg-primary capitalize !px-2 my-4 text-xs sm:text-base xl:text-xl'>
                        {t("btnContent")}
                    </Link>
                </ScaleAnimation>
            </div>

        </div>
    )
}

export default ClinicPreview


/*

*/