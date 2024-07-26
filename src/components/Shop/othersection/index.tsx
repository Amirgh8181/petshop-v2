import Link from 'next/link'
import React from 'react'
import StaticImageCopm from '../../UI/StaticImage'
import img from "@/public/images/Shop/uicart.jpg"
import { useTranslations } from 'next-intl'

const Collection = () => {
  const loremT = useTranslations("loremContent")
  const t = useTranslations("ShopPage.uiSection")
  return (
    <div className='md:w-[60%] w-[90%] md:aspect-[16/6]  flex md:flex-row flex-col items-center justify-between
     rounded-[3.5rem] bg-primary overflow-hidden mx-auto'
    >
      <div className='md:w-1/2 w-full'>
        <StaticImageCopm img={img} imgAlt='ui cart img' imgClass='w-full h-full object-contain' />
      </div>
      <div className='flex flex-col items-center text-center md:text-start md:justify-center md:items-start
        md:w-1/2 max-h-full h-full space-y-4 p-4 text-white'>
        <h3 className='md:text-2xl text-xl'>{loremT("cut1")}</h3>
        <p className='md:text-sm text-xs w-[90%]'>{loremT("half lorem")}</p>
        <div className='w-full flex justify-center'>
          <Link
            className='w-[60%] lg:w-[40%] aspect-[9/2] btn'
            href='/Shop/category'>
            {t("btn")}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Collection
