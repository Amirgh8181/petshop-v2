"use client"
import { ShopItem } from '@/root/types'
import CardUi from '../../UI/Card'
import { useEffect, useState } from 'react'
import { useCategType } from '@/src/stores/Category/useCategType'

const CategoryItemUi = ({ data }: { data: ShopItem[] | undefined }) => {

    const [showProduct, setShowProduct] = useState<ShopItem[] | undefined>()
    const { type } = useCategType()
    useEffect(() => {
        setShowProduct(type === 'All'
            ? data
            : data?.filter(q => q.category === type)
        )
    }, [type,data])
    return (
        <>
            {showProduct
                ?
                <div className='w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2'>
                    {
                        showProduct?.map(item =>
                            <div className='w-full' key={item._id}>
                                <CardUi product={item} key={item._id} />
                            </div>
                        )

                    }
                </div >
                :
                <div className='w-full text-center'>
                    <h3 className='text-4xl font-bold capitalize'>no item found in this category</h3>
                </div>
            }
        </>
    )
}
export default CategoryItemUi