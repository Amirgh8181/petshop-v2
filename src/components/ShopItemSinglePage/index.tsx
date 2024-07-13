import { ShopItem } from '@/root/types'
import Image from 'next/image'
import React from 'react'
import ShopItemLeftSide from './LeftSide'
import ScaleAnimation from '../UI/Animation/ScaleAnimation'

const ShopItemSinglePageContainer = ({ product }: { product: ShopItem }) => {
    if (typeof window !== "undefined") {
        window.scrollTo(0, 0)
    }
    return (
        <div className='container flex flex-col md:flex-row md:justify-around items-center md:mt-6 md:mb-0 mb-10 mt-[15vmax]'>
            <div className='md:w-1/2 w-[90vw] order-2 md:order-1 space-y-7 mt-6 md:mt-0'>
                <ShopItemLeftSide product={product} />
            </div>
            <ScaleAnimation
                scaleVal
                boxClass='md:w-[40%] w-[90vw] order-1 md:order-2'
                childClass='md:w-full w-[80%] mx-auto'
                once
                delay={1}
            >

                <Image src={product?.attachmentFile as string} alt='product image' width={500} height={500}
                    className='w-full aspect-square shadow-2xl rounded-badge'
                />
            </ScaleAnimation>
        </div>
    )
}

export default ShopItemSinglePageContainer