"use client"
import { useRouter } from "next/navigation"
import { IoArrowBackSharp } from "react-icons/io5";
const OneLevelBackBtn = () => {
    const router = useRouter()
    return (
            <button className={`btn px-2 bg-primary fixed xl:top-[2.5vmax] top-[11dvh] left-0 z-20 tooltip tooltip-bottom`}
                onClick={router.back}
                data-tip="back"
            >
                <IoArrowBackSharp className="xl:text-3xl md:text-xl text-base" />
            </button>
    )
}

export default OneLevelBackBtn