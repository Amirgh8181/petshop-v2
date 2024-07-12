import React from 'react'
import { ShopItem } from '@/root/types'
import Link from 'next/link'
import CardUi from '../../UI/Card'
import ScaleAnimation from '../../UI/Animation/ScaleAnimation'

const ProductPreview = ({ products }: { products: ShopItem[] }) => {

    return (
        <div className='w-full grid place-items-center space-y-[6dvh]'>
            <h3 className=''>Top products of this week</h3>
                <div className='grid md:grid-cols-4 grid-cols-2 w-[90%] md:gap-6 gap-4'>
                    {products.slice(0, 12).map(item =>
                        <ScaleAnimation scaleVal once>
                            <CardUi product={item} />
                        </ScaleAnimation>
                    )}
                </div>
                <Link href={"/Shop/category/All"} className='btn bg-primary w-[50%] md:text-xl text-white'>
                    View All
                </Link>
        </div>
    )
}

export default ProductPreview






