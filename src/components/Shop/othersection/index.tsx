import Link from 'next/link'
import React from 'react'
import StaticImageCopm from '../../UI/StaticImage'
import img from "@/public/images/Shop/uicart.jpg"
import { useLocale, useTranslations } from 'next-intl'

const Collection = () => {
  const loremT = useTranslations("loremContent")
  const t = useTranslations("ShopPage.uiSection")
  const local=useLocale()
  return (
    <div className='w-[90%] grid grid-cols-1 sm:grid-cols-2 place-items-center rounded-box bg-primary mx-auto'
    >
      <StaticImageCopm img={img} imgAlt='ui cart img' imgClass={`w-full aspect-square md:aspect-[4/2] ${local==="fa"?'sm:rounded-r-box sm:rounded-tl-none':'sm:rounded-l-box sm:rounded-tr-none'} rounded-t-box`}/>
      <div className='w-[90%] mx-auto text-center md:text-start text-white space-y-2 py-4'>
        <h3 className='w-[90%] mx-auto md:mx-0'>{loremT("cut2")}</h3>
        <p className='xl:text-lg md:text-sm sm:text-xs text-2xs w-[90%] mx-auto md:mx-0'>{loremT("half lorem")}</p>
        <Link
          className='w-[60%] btn mx-auto btnText sm:mx-0'
          href='/Shop/category'>
          {t("btn")}
        </Link>
      </div>
    </div>
  )
}

export default Collection
