import { ShopItem } from '@/root/types'
import Image from 'next/image'
import React from 'react'
import ShopItemLeftSide from './LeftSide'
import ScaleAnimation from '../UI/Animation/ScaleAnimation'

const ShopItemSinglePageContainer = ({ product }: { product: ShopItem }) => {
    return (
        <div className='w-full min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[17dvh] mb-6 sm:mt-[5dvh] sm:mb-0 md:mt-[11dvh]'>
            <div className='order-2 sm:order-1 space-y-7 w-[90%] h-full grid place-content-center mx-auto'>
                <ShopItemLeftSide product={product} />
            </div>
            <ScaleAnimation
                scaleVal
                boxClass='w-[90%] order-1 sm:order-2 mx-auto flex justify-center items-center'
                childClass='w-[90%] md:w-[80%]'
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