
const HeroContainer = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="w-full h-screen ">
            <div 
            className='w-full h-[95%] flex bg-gradient-to-tr from-petBlue via-violet-600 to-petBlue'
            >
                {children}
            </div>
            <div className="relative flex justify-center w-full h-7 bg-red-500">
                <div className="absolute -top-[1.5vmax] w-10 h-10 bg-green-600"></div>
            </div>
        </div>
    )
}

export default HeroContainer