import TranslateAnimation from '../../UI/Animation/TranslateAnimation'
import image from "@/public/images/about-us/about-us.jpg"
import StaticImageCopm from '../../UI/StaticImage'
import { useTranslations } from 'next-intl'
const AboutUs = () => {
    const t = useTranslations("Index.About")
    const loremT = useTranslations("loremContent")
    return (
        <div id='aboutUs' className='flex flex-col md:flex-row w-full items-center justify-center overflow-hidden'>
            <TranslateAnimation once duration={1} xVal={40} yVal={40} boxClass=' md:order-1 order-2 md:w-1/2 w-full md:h-full flex md:items-center items-start justify-center mt-4 md:mt-0'>

                <StaticImageCopm img={image} imgAlt='about-us'
                    imgClass='w-[70%] aspect-square mx-auto my-[2vmax] md:my-0 mask mask-heart'
                />
            </TranslateAnimation>
            <TranslateAnimation once duration={1} xVal={-40} yVal={-40} boxClass='order-1 md:order-2 md:w-1/2 w-full flex flex-col justify-center items-center md:items-start md:text-start text-center md:text-start px-4'>
                <h1 className='md:text-7xl text-4xl'>{t("title")}</h1>
                <p className=' md:text-sm md:mb-3 text-xs mb-2'>{loremT("lorem")} </p>
                <p className='md:text-xl text-base mb-2'>{loremT("half lorem")}</p>
                <p className='md:text-sm text-xs'>{loremT("cut1")}</p>
            </TranslateAnimation>
        </div>
    )
}

export default AboutUs