"use client"
import { useCartItems } from '@/src/stores/ShopStroes/useCartItem'
import React from 'react'

const ItemsHeader = () => {
    const { CartItem } = useCartItems()

    return (
        <h4 className='text-3xl font-bold text-left'>Cart - {CartItem.length} {CartItem.length > 1 ? "items" : "item"}</h4>

    )
}

export default ItemsHeader