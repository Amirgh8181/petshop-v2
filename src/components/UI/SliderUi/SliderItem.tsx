"use client"
import { SwiperSlide } from "swiper/react"
import CardUi from "../Card"
import { ShopItem } from "@/root/types"
import Slider from "../Slider/Slider"
const SwiperItem = ({ data }: { data: ShopItem[] }) => {
    return (
        <Slider >
            {data.map(item =>
                <SwiperSlide key={item._id}>
                    <CardUi product={item} />
                </SwiperSlide>
            )}

        </Slider>
    )
}
export default SwiperItem