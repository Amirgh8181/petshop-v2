"use client"
import { useFavoriteList } from '@/src/stores/ShopStroes/useFavoriteList'
import { ShopItem } from '@/root/types'
import { FaRegHeart } from 'react-icons/fa6'
import { signIn, useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'

const AddFavoriteListBtn = ({ itemDetails }: { itemDetails: ShopItem }) => {
    const { data: session } = useSession()
    const { setFavoriteList, FavoriteList } = useFavoriteList()
    const chekIncludes = FavoriteList.find(q => q._id === itemDetails._id)
    const t = useTranslations("ShopPage.singlePage.favorite")

    const addFavorite = (item: ShopItem) => {
        if (!session) {
            signIn()
        } else {
            setFavoriteList(item)
        }
    }
    return (
        <>
            <div onClick={() => addFavorite(itemDetails)}
                className='btn rounded-full md:w-1/2 w-[80%] font-bold text-sm md:text-base xl:text-xl bg-primary
                          border-2 border-primary'>
                <span className={`${chekIncludes && session && '!text-red-500'} text-lg md:text-xl xl:text-2xl`}><FaRegHeart /></span>
                <span className={`${chekIncludes && session && '!text-red-500'}`}>{chekIncludes && session ? t("remove") : t("add")}</span>
            </div>
        </>
    )
}

export default AddFavoriteListBtn