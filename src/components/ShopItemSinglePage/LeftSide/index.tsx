
import AddCartBtn from '@/src/components/UI/ShopItemSinglePage/AddCartBtn'
import AddFavoriteListBtn from '@/src/components/UI/ShopItemSinglePage/AddFavoriteListBtn'
import { ShopItem } from '@/root/types'
import React from 'react'
import Tabs, { TabsProps } from '../../UI/Tabs'
import TextAnimations from '../../UI/Animation/TextAnimation'
import TranslateAnimation from '../../UI/Animation/TranslateAnimation'
import { useLocale, useTranslations } from 'next-intl'
import { useExchangePrice } from '@/src/hooks/useExchangePrice'

const ShopItemLeftSide = ({ product }: { product: ShopItem }) => {
    const t = useTranslations("ShopPage.singlePage")
    const renderDataFroTabs: TabsProps[] = [
        { head: t("tabHead1"), content: product.description },
        { head: t("tabHead2"), content: product.description },
        { head: t("tabHead3"), content: product.description }
    ]
    const local = useLocale()
    return (
        <>
            <div>
                <TextAnimations
                    typeAnimation='typing'
                    text={product?.name}
                    el='h1'
                    once
                />
                <TranslateAnimation delay={0.5} yVal={20} once>
                    <p className='text-petBlue text-center md:text-start xl:text-xl'>{useExchangePrice(product.price, local)}</p>
                </TranslateAnimation>
            </div>
            <TranslateAnimation delay={0.75} yVal={20} childClass='flex space-x-4 items-center w-full xl:text-xl' once>
                <div className='font-bold mx-4'>{t("color")}</div>
                <div className='w-8 ring-2 ring-petBlue ring-offset-[3px] aspect-square rounded-full bg-yellow-500'></div>
                <div className='w-8  aspect-square rounded-full bg-violet-500'></div>
                <div className='w-8  aspect-square rounded-full bg-blue-500'></div>
            </TranslateAnimation>
            <TranslateAnimation delay={1} yVal={20} once>
                <Tabs renderData={renderDataFroTabs} />
            </TranslateAnimation>
            <TranslateAnimation
                delay={1.25}
                yVal={20}
                childClass='flex flex-col justify-center items-center gap-4'
                once>
                <AddFavoriteListBtn itemDetails={product} />
                <AddCartBtn itemDetails={product} />
            </TranslateAnimation>
        </>
    )
}

export default ShopItemLeftSide