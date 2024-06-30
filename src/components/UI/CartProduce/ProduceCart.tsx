import Image from 'next/image'
import React from 'react'
import { ShopItem } from '@/root/types'
import Link from 'next/link'


const ProduceCart = ({ showProduct, type }: { showProduct: ShopItem[], type: string }) => {

  return (
    <>
      {
        showProduct?.map(item =>
          <Link href={`/Shop/${item._id}`} key={item._id} className={
            type === "normal" ? `w-full aspect-[9/11] flex justify-center items-center 
             mt-8 shadow-lg md:rounded-[3rem] rounded-3xl border-1.5 border-petBlue`
              :
              `w-full h-full`
          }

          >

            hello
          </Link>
        )}
    </ >
  )
}


export default ProduceCart;

