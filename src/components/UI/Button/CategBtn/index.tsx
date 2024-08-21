interface categBtnProps {
    active: boolean,
    changeType: (type: string) => void,
    item: string,
    children: React.ReactNode
}
const CategBtn = ({ changeType, active, item, children }: categBtnProps) => {
    return (
        <span
            onClick={() => changeType(item)}
            className={`xs:text-xs sm:text-sm md:text-2xl xl:text-4xl btn bg-gray-300 border-b-4 w-full text-center
            ${active ?
                    'text-primary border-b-primary pb-2 cursor-pointer'
                    :
                    'text-primary/50 hover:text-primary pb-2 cursor-pointer border-b-transparent hover:border-b-primary transition-all duration-300'}`}>
            {children}
        </span>
    )
}

export default CategBtn