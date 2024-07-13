"use client"
import { useFavoriteList } from '@/src/stores/ShopStroes/useFavoriteList'
import { ShopItem } from '@/root/types'
import { FaRegHeart } from 'react-icons/fa6'
import { signIn, useSession } from 'next-auth/react'

const AddFavoriteListBtn = ({ itemDetails }: { itemDetails: ShopItem }) => {
    const { data: session } = useSession()
    const { setFavoriteList, FavoriteList } = useFavoriteList()
    const chekIncludes = FavoriteList.find(q => q._id === itemDetails._id)

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
                className='btn rounded-full md:w-1/2 w-[80%] font-bold md:text-base text-sm bg-primary
                          border-2 border-primary dark:text-white'>
                <span className={`${chekIncludes&& '!text-red-500'} text-xl`}><FaRegHeart /></span>
                <span className={`${chekIncludes&& '!text-red-500'}`}>{chekIncludes ? "Remove From List" : "Add To FavoriteList"}</span>
            </div>
        </>
    )
}

export default AddFavoriteListBtn