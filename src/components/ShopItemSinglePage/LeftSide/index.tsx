
import AddCartBtn from '@/src/components/UI/ShopItemSinglePage/AddCartBtn'
import AddFavoriteListBtn from '@/src/components/UI/ShopItemSinglePage/AddFavoriteListBtn'
import { ShopItem } from '@/root/types'
import React from 'react'

const ShopItemLeftSide = ({ product }: { product: ShopItem }) => {

    return (
        <>
            <div>
                <h1 className='text-3xl'>{product?.name}</h1>
                <p className='text-petBlue'>{product?.price}</p>
            </div>

            <div className='flex space-x-4 items-center w-full'>
                <div className='font-bold'>Actual Color</div>
                <div className='w-8 ring-2 ring-petBlue ring-offset-[3px] aspect-square rounded-full bg-yellow-500'></div>
                <div className='w-8  aspect-square rounded-full bg-violet-500'></div>
                <div className='w-8  aspect-square rounded-full bg-blue-500'></div>
            </div>
            <div className='flex space-x-6'>
                <AddFavoriteListBtn itemDetails={product} />
                <AddCartBtn itemDetails={product} />
            </div>
        </>
    )
}

export default ShopItemLeftSide