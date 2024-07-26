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
    const t =useTranslations("Index.Shop")
    return (
        <div className="card card-compact dark:bg-primary/60 bg-primary/10 glass w-[90%] shadow-inner 
        shadow-primary group mx-auto">

            <figure className='p-3'>
                <div className='w-full aspect-[16/10] overflow-hidden rounded-btn'>
                    <Image
                        src={product.attachmentFile}
                        alt={"item"}
                        width={300}
                        height={300}
                        className='w-full h-full group-hover:scale-125 rounded-btn transition-transform duration-500' />
                </div>
            </figure>
            <div className="card-body items-center w-full">
                <h2 className="card-title text-sm md:text-lg text-center">{product.name}</h2>
                <p className='text-xs md:text-sm textStrok'>{product.price}</p>
                <div className="card-actions w-full">
                    <Link href={`/Shop/${product._id}`} className="btn btn-primary w-[80%] mx-auto">{btnTxt ?? t("card")}</Link>
                </div>
            </div>
        </div>
    )
}

export default CardUi