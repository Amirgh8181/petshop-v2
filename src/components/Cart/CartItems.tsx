"use client"
import { useCartItems } from '@/src/stores/ShopStroes/useCartItem'
import TranslateAnimation from '@/ui/Animation/TranslateAnimation'
import Image from 'next/image';
import Link from 'next/link';
import DeleteItem from '@/ui/CartUi/DeleteItem';
import CartCounter from '../UI/CartUi/Counter';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { CartItem } from '@/root/types';
import LoadingUi from '../UI/Loading';
const CartItems = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [items, setItems] = useState<CartItem[]>([])
    const { CartItem } = useCartItems()
    console.log(CartItem);

    const t = useTranslations("Cart")
    useEffect(() => {
        setItems(CartItem)
        setLoading(false)
    })
    return (
        <>
            {loading ? <LoadingUi isLoading />
                :
                items.length > 0 ?
                    items?.map(item =>
                        <TranslateAnimation
                            childClass='w-[90%] flex justify-around items-center rounded-2xl bg-base-200 mx-auto
                         p-4 relative'
                            amountView={0.6}
                            yVal={20}
                            once
                        >
                            <Image src={item.attachmentFile} alt='cart item image' width={300} height={300}
                                className='w-[20%] aspect-square bg-primary rounded-box object-contain' />

                            <div className='md:text-2xl text-xs'>{item.name}</div>

                            <CartCounter count={item.count} id={item._id} />

                            <span className='md:text-2xl text-base '>{item.price}</span>

                            <DeleteItem id={item._id} />

                        </TranslateAnimation>
                    )
                    :
                    <div className='flex flex-col items-center justify-center w-full absolute inset-0 space-y-2'>
                        <div className='text-3xl'>{t("found")}</div>
                        <Link href={"/Shop"} className='btn bg-primary !px-2'>{t("goShop")}</Link>
                    </div>
            }
        </>
    )
}

export default CartItems