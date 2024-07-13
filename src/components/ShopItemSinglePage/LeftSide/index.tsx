
import AddCartBtn from '@/src/components/UI/ShopItemSinglePage/AddCartBtn'
import AddFavoriteListBtn from '@/src/components/UI/ShopItemSinglePage/AddFavoriteListBtn'
import { ShopItem } from '@/root/types'
import React from 'react'
import Tabs, { TabsProps } from '../../UI/Tabs'
import TextAnimations from '../../UI/Animation/TextAnimation'
import TranslateAnimation from '../../UI/Animation/TranslateAnimation'

const ShopItemLeftSide = ({ product }: { product: ShopItem }) => {
    const renderDataFroTabs: TabsProps[] = [
        { head: "Product Details", content: product.description },
        { head: "Specification", content: product.description },
        { head: "Reviews", content: product.description }
    ]
    return (
        <>
            <div>
                <TextAnimations
                    boxClass=''
                    typeAnimation='typing'
                    text={product?.name}
                    el='h2'
                    once
                />
                <TranslateAnimation delay={0.5} yVal={20} once>
                    <p className='text-petBlue'>{product?.price}</p>
                </TranslateAnimation>
            </div>
            <TranslateAnimation delay={0.75} yVal={20} childClass='flex space-x-4 items-center w-full' once>
                <div className='font-bold'>Actual Color</div>
                <div className='w-8 ring-2 ring-petBlue ring-offset-[3px] aspect-square rounded-full bg-yellow-500'></div>
                <div className='w-8  aspect-square rounded-full bg-violet-500'></div>
                <div className='w-8  aspect-square rounded-full bg-blue-500'></div>
            </TranslateAnimation>
            <TranslateAnimation delay={1} yVal={20} once>
                <Tabs renderData={renderDataFroTabs} />
            </TranslateAnimation>
            <TranslateAnimation delay={1.25} yVal={20} childClass='flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-6' once>
                <AddFavoriteListBtn itemDetails={product} />
                <AddCartBtn itemDetails={product} />
            </TranslateAnimation>
        </>
    )
}

export default ShopItemLeftSide