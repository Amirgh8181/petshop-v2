import { ShopItem } from '@/root/types'
import Image from 'next/image'
import React from 'react'
import ShopItemLeftSide from './LeftSide'

const ShopItemSinglePageContainer = ({ product }: { product: ShopItem }) => {

    return (
        <div className='container flex flex-col md:flex-row md:justify-around items-center md:mt-6 md:mb-0 mb-10 mt-[15vmax]'>
            <div className='md:w-1/2 w-[90vw] order-2 md:order-1 space-y-7 mt-6 md:mt-0'>
                <ShopItemLeftSide product={product} />
            </div>
            <div className='md:w-[40%] w-[90vw] order-1 md:order-2'>
                <Image src={product?.attachmentFile as string} alt='product image' width={500} height={500}
                    className='md:w-[100%] w-[80%] mx-auto aspect-square shadow-2xl rounded-[3.75rem]'
                />
            </div>
        </div>
    )
}

export default ShopItemSinglePageContainer