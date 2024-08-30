"use client"
import Link from 'next/link'
import React from 'react'
import StaticImageCopm from '../../UI/StaticImage'
import img from "@/public/images/Shop/uicart.jpg"
import { useLocale, useTranslations } from 'next-intl'
import { useCategType } from '@/src/stores/Category/useCategType'

const Collection = () => {
  const t = useTranslations("ShopPage.uiSection")
  const local = useLocale()
  const {setType}=useCategType()
  return (
    <div className='w-[90%] md:w-[70%] grid grid-cols-1 sm:grid-cols-2 items-center rounded-box bg-primary mx-auto !mb-[6dvh]'
    >
      <StaticImageCopm img={img} imgAlt='ui cart img' imgClass={`w-full aspect-square sm:aspect-[4/3]  ${local === "fa" ? 'sm:rounded-r-box sm:rounded-tl-none' : 'sm:rounded-l-box sm:rounded-tr-none'} rounded-t-box`} />
      <div className='w-[90%] text-start text-white space-y-2 p-4'>
        <h3 className='w-[90%] mx-auto md:mx-0'>{t("title")}</h3>
        <p className='xl:text-lg md:text-base text-sm  w-[90%] mx-auto md:mx-0'>{t("content")}</p>
        <Link
          onClick={() =>setType("All")}
          className='w-[60%] btn mx-auto btnText sm:mx-0'
          href='/Shop/category'>
          {t("btn")}
        </Link>
      </div>
    </div>
  )
}

export default Collection
