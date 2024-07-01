import React from 'react'
import { ShopItem } from '@/root/types'
import Link from 'next/link'
import CardUi from '../../UI/Card'
import ScaleAnimation from '../../UI/Animation/ScaleAnimation'

const ProductPreview = ({ products }: { products: ShopItem[] }) => {

    return (
        <div className='w-full flex flex-col items-center'>
            <h6>Top products of this week</h6>
            <div className='w-full grid place-items-center'>
                <div className='grid md:grid-cols-4 grid-cols-2 place-items-center w-[90%] py-6 md:gap-6 gap-4'>
                    {products.slice(0, 12).map(item =>
                        <ScaleAnimation scaleVal once>
                            <CardUi product={item} />
                        </ScaleAnimation>
                    )}
                </div>
            </div>

            <div className='mt-8 w-full grid place-items-center'>
                <Link href={"/Shop/category/All"} className='btn bg-primary md:w-[15%] w-[50%] aspect-[9/2]'>
                    View All
                </Link>
            </div>

        </div>
    )
}

export default ProductPreview






