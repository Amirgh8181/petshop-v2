"use client"
import { useRouter } from "next/navigation"
import { IoArrowBackSharp } from "react-icons/io5";
const OneLevelBackBtn = ({ topPositionBtnStyle }: { topPositionBtnStyle?: string }) => {
    const router = useRouter()
    return (
        <button className={`btn bg-primary absolute ${topPositionBtnStyle ?? ""} top-[10dvh] left-2 z-20 tooltip tooltip-bottom`}
            onClick={router.back}
            data-tip="back"
        >
            <IoArrowBackSharp className="md:text-xl text-xs" />
        </button>
    )
}

export default OneLevelBackBtn