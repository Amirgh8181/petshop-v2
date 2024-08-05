"use client"
import { ShopItem } from '@/root/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

interface CardUiProps {
    product: ShopItem,
    btnTxt?: string
}



const CardUi = ({ product, btnTxt }: CardUiProps) => {
    const t = useTranslations("Index.Shop")
    return (
        <div className="card card-compact dark:bg-primary/60 bg-primary/10 glass w-[95%] shadow-inner 
        shadow-primary group mx-auto">

            <figure className='group pt-3'>
                <Image
                    src={product.attachmentFile}
                    alt={"item"}
                    width={300}
                    height={300}
                    className='w-full aspect-[16/9] md:aspect-[16/10] object-contain group-hover:scale-125 rounded-btn transition-transform duration-500' />
            </figure>
            <div className="card-body items-center w-full">
                <h2 className="card-title text-xs md:text-lg xl:text-2xl text-center">{product.name}</h2>
                <p className='text-xs md:text-sm xl:text-base textStrok'>{product.price}</p>
                <div className="card-actions w-full">
                    <Link href={`/Shop/${product._id}`} className="sm:w-[80%] w-[90%] bg-primary/80 hover:bg-primary/90 active:bg-primary xl:text-base md:text-sm text-2xs text-center py-1 sm:py-3 rounded-btn transition-all duration-300 mx-auto">{btnTxt ?? t("card")}</Link>
                </div>
            </div>
        </div>
    )
}

export default CardUi