"use client"
import { useEffect, useState } from 'react'
import { ShopItem } from '@/root/types'
import CategoryItemsType from './ItemsType'
import CategoryItemUi from './ItemUi'
import { useSearchParams } from 'next/navigation'

const CategoryProducts = ({ data }: { data: ShopItem[] }) => {
    const [type, setType] = useState<string>("")
    const search = useSearchParams()
    useEffect(() => {
        setType(search.get("search") ?? "All")
    }, [search.get("search")])

    const changeType = (type: string) => {
        setType(type)
    }
    
    const showProduct = type === 'All'
        ? data
        : data.filter(q => q.category === type)

    return (
        <>
            <CategoryItemsType type={type} changeType={changeType} />
            <CategoryItemUi data={showProduct} />
        </>
    )
}

export default CategoryProducts