"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';
import SwiperCore from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import './Slider.css'
// import required modules
import { Autoplay, FreeMode, A11y } from 'swiper/modules';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useLocale } from 'next-intl';

interface sliderProps {
    children: React.ReactNode,
    slideIn480?: number,
    slideIn720?: number,
    slideIn0?: number,
    slideIn1280?: number
}



export default function Slider({ children, slideIn0, slideIn480, slideIn720 }:sliderProps ) {

    const local = useLocale()
    const swiperRef = useRef<SwiperCore>();
    const sliderPerView = {
        0: {
            slidesPerView: slideIn0 ?? 2,
        },
        480: {
            slidesPerView: slideIn480 ?? 3,
        },
        720: {
            slidesPerView: slideIn720 ?? 4,
        },

    }




    return (
        <div className='w-full h-screen flex justify-center items-center px-2'>

            <div onClick={() => swiperRef.current?.slidePrev()} className={`btn bg-primary ${local === "fa" && 'rotate-180'}`}>
                <MdNavigateBefore className='text-3xl'/>
            </div>

            <Swiper

                breakpoints={sliderPerView}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={{
                    clickable: true,
                }}

                freeMode={{
                    enabled: true,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Autoplay, FreeMode, A11y]}

            >
                {children}
            </Swiper >
            <div onClick={() => swiperRef.current?.slideNext()} className={`btn bg-primary ${local === "fa" && 'rotate-180'}`}>
                <MdNavigateNext className='text-3xl'/>
            </div>
        </div>


    );
}