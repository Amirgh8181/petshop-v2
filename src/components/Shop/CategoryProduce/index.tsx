"use client"
import { useEffect, useState } from 'react'
import { ShopItem } from '@/root/types'
import CategoryItemsType from './ItemsType'
import CategoryItemUi from './ItemUi'
import { useSearchParams } from 'next/navigation'

const CategoryProducts = ({ data }: { data: ShopItem[] }) => {
    const [type, setType] = useState<string>("")
    const [showProduct, setShowProduct] = useState<ShopItem[]>([])
    const search = useSearchParams()

    useEffect(() => {
        setShowProduct(type === 'All'
            ? data
            : data.filter(q => q.category === type)
        )
    }, [type])

    useEffect(() => {
        setType(search.get("search") ?? "All")
    }, [search.get("search")])

    const changeType = (type: string) => {
        setType(type)
    }


    return (
        <div className='w-full bg-red-500 my-6'>
            <CategoryItemsType type={type} changeType={changeType} />
            <CategoryItemUi data={showProduct} />
        </div>
    )
}

export default CategoryProducts