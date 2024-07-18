import { useTranslations } from 'next-intl'
import React from 'react'

const CategoryItemsType = ({ type, changeType }: { type: string, changeType: (type: string) => void }) => {
    const categ = ["All", "Beds", "Furnitures", "Treats", "Food", "Health", "Toys"]
    const t = useTranslations("ShopPage.category")
    return (
        <ul className='flex items-center justify-around md:w-[60%] w-full h-full md:font-bold mt-[2vmax]'>
            {categ.map(item =>
                <div key={item} onClick={() => changeType(item)}
                    className={type === item ?
                        'text-petBlue border-b-2 border-b-petBlue pb-2 text-sm md:text-lg cursor-pointer'
                        :
                        'text-petBlue/70 hover:text-petBlue pb-2 cursor-pointer border-b-2 border-b-transparent hover:border-b-petBlue text-sm md:text-lg transition-all duration-300'}>
                    {t(item)}
                </div>
            )}
        </ul>
    )
}

export default CategoryItemsType