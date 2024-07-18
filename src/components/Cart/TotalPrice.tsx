"use client"
import { useCartItems } from '@/src/stores/ShopStroes/useCartItem'
import { useTranslations } from 'next-intl'

const TotalPrice = () => {
    const { totalPrice } = useCartItems()
    const t = useTranslations("Cart")

    return (
        <>
            {
                totalPrice !== 0 &&
                <div className='flex justify-around mt-4 w-full text-2xl font-bold'>
                    <div>{t("total")}</div>
                    <div>
                        {`$${totalPrice}`}
                    </div>
                </div>
            }
        </>
    )
}

export default TotalPrice