import TranslateAnimation from '../../UI/Animation/TranslateAnimation'
import image from "@/public/images/about-us/about-us.jpg"
import StaticImageCopm from '../../UI/StaticImage'
import { useTranslations } from 'next-intl'
const AboutUs = () => {
    const t = useTranslations("Index.About")
    return (
        <section id='aboutUs' className='grid grid-col-1 sm:grid-cols-2 overflow-hidden'>
            <TranslateAnimation once duration={1} xVal={40} yVal={40} boxClass='sm:order-1 order-2 w-full mt-4 sm:my-0'>
                <StaticImageCopm img={image} imgAlt='about-us'
                    imgClass='w-[60%] sm:w-[70%] aspect-square mx-auto my-[2vmax] md:my-0 mask mask-heart'
                />
            </TranslateAnimation>
            <TranslateAnimation once duration={1} xVal={-40} yVal={-40} boxClass='order-1 sm:order-2 w-full sm:text-start text-center grid place-items-center'>
                <h1 className='md:text-7xl text-4xl'>{t("title")}</h1>
                <p className='xl:text-lg md:text-sm text-2xs my-1'>{t("subTit")} </p>
                <p className='xl:text-3xl md:text-xl sm:text-base text-sm w-[80%] mx-auto sm:mx-0 my-1'>{t("content")}</p>
                <p className='xl:text-lg md:text-sm text-2xs my-1 w-[80%] mx-auto sm:mx-0'>{t("last")}</p>
            </TranslateAnimation>
        </section>
    )
}

export default AboutUs