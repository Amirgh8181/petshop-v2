"use client"
import { SwiperSlide } from "swiper/react"

const SwiperItem = ({ children }: { children: React.ReactNode }) => {
    return (

        <SwiperSlide>
            {children}
        </SwiperSlide>
    )
}

export default SwiperItem