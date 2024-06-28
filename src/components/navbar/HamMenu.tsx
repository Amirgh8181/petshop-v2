import NavItem from "./NavItem";


const HamMenu = ({ openMenu }: { openMenu: boolean }) => {

    return (
        <>

            {
                openMenu &&
                <div className='w-full h-screen flex items-center justify-center fixed bg-primary z-30 inset-0'>
                    <NavItem />
                </div>
            }
        </>
    )
}

export default HamMenu