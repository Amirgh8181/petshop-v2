"use client"
import { useCartItems } from '@/src/stores/ShopStroes/useCartItem'
import { ShopItem } from '@/root/types'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { signIn, useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
const AddCartBtn = ({ itemDetails }: { itemDetails: ShopItem }) => {
    const { setCartItem, CartItem } = useCartItems()
    const chekIncludes = CartItem.find(q => q._id === itemDetails._id)
    const { data: session } = useSession()
    const t = useTranslations("ShopPage.singlePage.cart")
    const addCart = (item: ShopItem) => {
        if (!session) {
            signIn()
        } else {
            setCartItem(item)
        }
    }
    return (
        <>
            <div onClick={() => addCart(itemDetails)}
                className='btn rounded-full md:w-[70%] w-[80%] font-bold text-sm md:text-base xl:text-xl dark:bg-petBlue/20 dark:border-petBlue
                border-2 bg-darkPetBlue/20 border-darkPetBlue dark:text-white'>
                <span className={`${chekIncludes && session && '!text-red-500'} text-xl`}><MdOutlineAddShoppingCart /></span>
                <span className={`${chekIncludes && session && '!text-red-500'}`}>{chekIncludes && session ? t("remove") : t("add")}</span>
            </div>
        </>
    )
}

export default AddCartBtn