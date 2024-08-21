import React from 'react'
import { ShopItem } from '@/root/types'
import Link from 'next/link'
import CardUi from '../../UI/Card'
import ScaleAnimation from '../../UI/Animation/ScaleAnimation'
import { useTranslations } from 'next-intl'

const ProductPreview = ({ products }: { products: ShopItem[] }) => {
    const t = useTranslations("ShopPage.shopSection")
    return (
        <div className='w-full grid place-items-center space-y-[6dvh] overflow-hidden'>
            <h3>{t("head")}</h3>
            <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 w-[90%] md:gap-6 gap-4'>
                {products.slice(0, 12).map(item =>
                    <ScaleAnimation scaleVal once key={item._id}>
                        <CardUi product={item} />
                    </ScaleAnimation>
                )}
            </div>
            <Link href={"/Shop/category/All"} className='btn bg-primary lg:btn-lg w-[50%] text-white btnText'>
                {t("btn")}
            </Link>
        </div>
    )
}

export default ProductPreview






