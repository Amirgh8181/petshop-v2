import b from "@/public/images/Shelters/Preview/shelterPreview.jpg"
import StaticImageCopm from '../../UI/StaticImage'
import TranslateAnimation from "../../UI/Animation/TranslateAnimation"
import Link from "next/link"
const ShelterPreview = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 place-content-center overflow-hidden ">
            <TranslateAnimation xVal={200} duration={1.5} boxClass="w-full mask mask-parallelogram">
                <StaticImageCopm
                    img={b}
                    imgAlt='dasd'
                    imgClass='w-full aspect-square' />
            </TranslateAnimation>


            <TranslateAnimation xVal={-200} duration={1.5}
                boxClass="grid place-content-center space-y-2 text-center mb-[3vmax] md:mb-0"
            >
                <h1 className="md:text-5xl text-2xl">
                    Do you need a pet?
                </h1>
                <h4 className="md:text-xl text-base">
                    You can get a pet from the shelter section
                </h4>
                <div className="w-full flex justify-center">
                    <Link
                        href={"/Shelters"}
                        className='btn bg-primary capitalize !px-2 my-4'>
                        go and visit Shelters
                    </Link>
                </div>
            </TranslateAnimation>
        </div>
    )
}

export default ShelterPreview