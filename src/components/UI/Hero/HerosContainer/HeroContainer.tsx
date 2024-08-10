import { StaticImageData } from "next/image"
import StaticImageCopm from "../../StaticImage"

const HeroContainer = ({ children, img }: { children: React.ReactNode, img: StaticImageData }) => {

    return (
        <div className="w-full h-screen relative">
            <div className="h-full">
                <StaticImageCopm img={img} imgAlt="hero-bg" imgClass="h-full " />
            </div>
            <div className="w-full h-screen absolute inset-0 z-10
            bg-gradient-to-r from-petBlue/70 to-petBlue/90 dark:from-darkPetBlue/70 dark:to-darkPetBlue/90">
                {children}
            </div>
        </div>
    )
}

export default HeroContainer