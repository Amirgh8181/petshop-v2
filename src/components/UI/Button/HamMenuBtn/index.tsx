"use client"
import { useHamMenu } from '@/src/stores/Header/useHamMenu';
import { RiMenu2Line } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";



const HamMenuBtn = () => {
    const { isOpenHam, setCloseHam, setToggleHam } = useHamMenu()
    const MOBILE_THRESHOLD: number = 768

    function updateSize(): void {
        window.innerWidth > MOBILE_THRESHOLD && setCloseHam();
    }
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', updateSize);
    }
    return (
        <label className="navbarBtn swap swap-rotate md:hidden" >
            <input type="checkbox" onClick={setToggleHam} />
            {isOpenHam ?
                <RiCloseLargeLine className='text-2xl' />
                :
                <RiMenu2Line className='text-2xl' />
            }
        </label>
    )
}

export default HamMenuBtn