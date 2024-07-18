"use client"
import { useCartItems } from '@/src/stores/ShopStroes/useCartItem'
import { useTranslations } from 'next-intl'
import React from 'react'

const ItemsHeader = () => {
    const { CartItem } = useCartItems()
    const t = useTranslations("Cart")
    return (
        <h4 className='text-3xl font-bold text-start'>{t("cart")} - {CartItem.length > 0 && CartItem.length} {t('item', { count: CartItem.length })}</h4>

    )
}

export default ItemsHeader