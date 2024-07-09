"use client"
import { ShopItem } from '@/root/types'
import CardUi from '@/src/components/UI/Card'
import ProduceCart from '@/src/components/UI/CartProduce/ProduceCart'
import { useFavoriteList } from '@/src/stores/ShopStroes/useFavoriteList'
import React from 'react'

const FavoriteList = () => {
  const { FavoriteList } = useFavoriteList()
  console.log(FavoriteList);
  console.log(FavoriteList.length);


  return (
    <div>
      {FavoriteList.length > 0
        ?
        <div className='py-[10vmin]'>
          <h1 className='text-5xl text-center py-4'>favorite list item</h1>
          <div className='grid md:grid-cols-4 grid-cols-2 px-8 gap-8'>
            {
              FavoriteList.map(item =>
                <CardUi product={item} />
              )
            }
          </div>
        </div>
        :
        <div className='w-full h-screen flex items-center justify-center'>
          <div className='text-3xl'>no anything to show you</div>
        </div>
      }
    </div>
  )
}

export default FavoriteList