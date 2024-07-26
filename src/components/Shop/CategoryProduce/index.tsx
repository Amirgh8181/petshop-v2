"use client"
import { useState } from 'react'
import { ShopItem } from '@/root/types'
import CategoryItemsType from './ItemsType'
import CategoryItemUi from './ItemUi'

const CategoryProducts = ({ data }: { data: ShopItem[] }) => {
    const [type, setType] = useState<string>("All")
    const changeType = (type: string) => {
        setType(type)
    }
    const showProduct = type === 'All'
        ? data
        : data.filter(q => q.category === type)
    return (
        <>
            <CategoryItemsType type={type} changeType={changeType}/>
            <CategoryItemUi data={showProduct} />
        </>
    )
}

export default CategoryProducts