const CenterItems = ({ icon, text }: { icon: React.JSX.Element, text: string }) => {
    return (
        <div className='flex space-x-2 w-[70%] md:w-full mx-auto'>
            <span className='text-xl lg:text-2xl '>
                {icon}
            </span>
            <p className='md:text-sm sm:text-2xs text-xs xl:text-lg font-normal text-start'>
                {text}
            </p>
        </div >
    )
}

export default CenterItems