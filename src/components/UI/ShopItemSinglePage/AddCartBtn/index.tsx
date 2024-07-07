"use client"
import { useCartItems } from '@/src/stores/ShopStroes/useCartItem'
import { ShopItem } from '@/root/types'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { signIn, useSession } from 'next-auth/react'

const AddCartBtn = ({ itemDetails }: { itemDetails: ShopItem }) => {
    const { setCartItem,CartItem } = useCartItems()
    const chekIncludes=CartItem.find(q=>q._id===itemDetails._id)
    const { data: session } = useSession()
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
                className='btn rounded-full w-1/2 font-bold md:text-base text-sm dark:bg-petBlue/20 dark:border-petBlue
                border-2 bg-darkPetBlue/20 border-darkPetBlue dark:text-white'>
                <span className='text-xl'><MdOutlineAddShoppingCart /></span>
                <span>{chekIncludes ? "Remove From Cart" : "Add To Cart"}</span>
            </div>
        </>
    )
}

export default AddCartBtn