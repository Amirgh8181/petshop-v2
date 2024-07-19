"use client"
import { SwiperSlide } from "swiper/react"
import CardUi from "../../UI/Card"
import { ShopItem } from "@/root/types"
import Slider from "../../UI/Slider/Slider"

const SwiperItem = ({ data }: { data: ShopItem[] }) => {
    console.log(data);

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