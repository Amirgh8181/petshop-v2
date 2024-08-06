import { StaticImageData } from "next/image"
import StaticImageCopm from "../../StaticImage"

const HeroContainer = ({ children, img }: { children: React.ReactNode, img: StaticImageData }) => {

    return (
        <div className="w-full h-screen relative">
            <div className="w-full h-full absolute inset-0 z-0">
                <StaticImageCopm img={img} imgAlt="hero-bg" imgClass="w-full h-full absolute inset-0" />
            </div>
            <div className=" w-full h-screen grid sm:grid-cols-2 gird-cols-1 place-content-center
            bg-gradient-to-r from-petBlue/80 to-darkPetBlue/80 relative z-10 overflow-hidden">
                {children}
            </div>
        </div>
    )
}

export default HeroContainer