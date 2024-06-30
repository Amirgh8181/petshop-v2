// import { ShopItem } from '@/types';
// import getProducts from '@/lib/getProducts';
// import PreviewSectionsHeader from '@/components/UI/previewHeader';
"use client"
import Slider from "@/src/components/UI/Slider/Slider"
import Image from "next/image"
import faka from "@/public/images/hero/hero-big.png"
import SwiperItem from "./ShopItem"
import { SwiperSlide } from "swiper/react"
import CardUi from "../../UI/Card"


const ShopPreview = async () => {
    // let req: ShopItem[] = await getProducts()

    return (
        <section id="ShopPreview" className='w-full h-screen snap-center'>
            {/* <PreviewSectionsHeader previewLink='/Shop' previewSectionName='Shop' /> */}
            <Slider >
                <SwiperSlide>
                    <CardUi hrefProduct="/" imageAlt="asdads" imageSrc="/images/hero/hero-big.png" price="12.50" title="pet toy" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardUi hrefProduct="/" imageAlt="asdads" imageSrc="/images/hero/hero-big.png" price="12.50" title="pet toy" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardUi hrefProduct="/" imageAlt="asdads" imageSrc="/images/hero/hero-big.png" price="12.50" title="pet toy" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardUi hrefProduct="/" imageAlt="asdads" imageSrc="/images/hero/hero-big.png" price="12.50" title="pet toy" />
                </SwiperSlide>
            </Slider>
        </section>
    )
}

export default ShopPreview