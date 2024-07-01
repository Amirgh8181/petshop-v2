import ScaleAnimation from "../../Animation/ScaleAnimation"

const HeroContainer = ({ children }: { children: React.ReactNode }) => {

    return (
        <ScaleAnimation once scaleXVal boxClass="w-full h-screen origin-left">
            <div className="flex flex-col md:flex-row w-full h-screen bg-gradient-to-tr from-primary via-darkPetBlue/60 dark:via-petBlue to-primary">
                {children}
            </div>
        </ScaleAnimation>
    )
}

export default HeroContainer