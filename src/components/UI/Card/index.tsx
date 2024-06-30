import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardUiProps {
    imageSrc: string,
    imageAlt: string,
    title: string,
    price: string,
    hrefProduct: string,
}



const CardUi = ({ imageSrc, imageAlt, title, price, hrefProduct }: CardUiProps) => {
    return (
        <div className="card card-compact bg-base-100/20 glass w-[90%] shadow-inner shadow-primary flex flex-col justify-center items-center">
            <figure>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={300}
                    height={300}
                    className='w-[80%] aspect-square object-contain' />
            </figure>
            <div className="card-body items-center w-full">
                <h2 className="card-title text-center">{title}</h2>
                <p>{price}</p>
                <div className="card-actions w-full">
                    <Link href={hrefProduct} className="btn btn-primary w-[80%] mx-auto">Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default CardUi