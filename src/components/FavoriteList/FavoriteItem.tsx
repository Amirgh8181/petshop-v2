"use client"
import { useEffect, useState } from 'react'
import TranslateAnimation from '../UI/Animation/TranslateAnimation'
import { useFavoriteList } from '@/src/stores/ShopStroes/useFavoriteList'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { IoClose } from 'react-icons/io5'
import CardUi from '../UI/Card'
import { ShopItem } from '@/root/types'
import LoadingUi from '../UI/Loading'
const FavoriteItem = () => {
    const { FavoriteList, setFavoriteList } = useFavoriteList()
    const [loading, setLoading] = useState<boolean>(true)
    const [items, setItems] = useState<ShopItem[]>([])
    const t = useTranslations("FavoriteList")
    useEffect(() => {
        setItems(FavoriteList)
        setLoading(false)
    }, [FavoriteList])
    return (
        <div className='w-full min-h-screen flex items-start'>
            {loading ?
                <LoadingUi isLoading />
                :
                items.length > 0
                    ?
                    <div className='w-[90%] mx-auto mt-20 xl:mt-32'>
                        <h1 className='capitalize w-full'>{t("title")}</h1>
                        <TranslateAnimation
                            childClass='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2'
                            once
                            yVal={60}
                            delay={1}
                        >
                            {
                                items.map(item =>
                                    <div className='w-full relative' key={item._id}>
                                        <div
                                            className='group absolute text-3xl xl:top-8 md:top-8 top-6 sm:right-6  right-6 z-10 cursor-pointer tooltip'
                                            data-tip={t("tooltip")}
                                            onClick={() => setFavoriteList(item)}
                                        >
                                            <IoClose className='xl:text-4xl lg:text-2xl text-xl group-hover:rotate-90 group-hover:text-red-500 transition-all duration-300' />
                                        </div>
                                        <CardUi product={item} btnTxt={t("cardBtn")} />
                                    </div>
                                )
                            }
                        </TranslateAnimation>
                    </div>
                    :
                    <div className='flex flex-col items-center justify-center w-full absolute inset-0 space-y-2'>
                        <div className='text-3xl'>{t("noItem")}</div>
                        <Link href={"/Shop"} className='btn bg-primary !px-2'>{t("goShop")}</Link>
                    </div>
            }
        </div>
    )
}

export default FavoriteItem

