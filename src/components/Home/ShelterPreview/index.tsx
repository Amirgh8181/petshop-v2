import mainImg from "@/public/images/Shelters/Preview/shelterPreview.jpg"
import StaticImageCopm from '../../UI/StaticImage'
import TranslateAnimation from "../../UI/Animation/TranslateAnimation"
import Link from "next/link"
import { useTranslations } from "next-intl"
const ShelterPreview = () => {
    const t = useTranslations("Index.shelter")

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <TranslateAnimation xVal={200} duration={1.5} boxClass="w-full mask mask-parallelogram">
                <StaticImageCopm
                    img={mainImg}
                    imgAlt='dasd'
                    imgClass='w-full aspect-square' />
            </TranslateAnimation>


            <TranslateAnimation xVal={-200} duration={1.5}
                boxClass="grid place-content-center space-y-2 text-center mb-[3vmax] md:mb-0"
            >
                <h1 className="md:text-5xl text-2xl">
                    {t("title")}
                </h1>
                <h4 className="md:text-xl text-base">
                    {t("title2")}
                </h4>
                <div className="w-full flex justify-center">
                    <Link
                        href={"/Shelters"}
                        className='btn bg-primary capitalize !px-2 my-4'>
                        {t("btnContent")}
                    </Link>
                </div>
            </TranslateAnimation>
        </div>
    )
}

export default ShelterPreview