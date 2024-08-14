import { useTranslations } from 'next-intl'

const CategoryItemsType = ({ type, changeType }: { type: string, changeType: (type: string) => void }) => {
    const categ = ["All", "Beds", "Furnitures", "Treats", "Food", "Health", "Toys"]
    const t = useTranslations("ShopPage.category")
    return (
        <ul id='startCategory' className='flex items-center space-x-4 md:space-x-8 px-2'>
            {categ.map(item =>
                <li key={item} onClick={() => changeType(item)}
                    className={`xs:text-xs sm:text-sm md:text-lg xl:text-2xl md:font-bold
                        ${type === item ?
                            'text-petBlue border-b-2 border-b-petBlue pb-2 cursor-pointer'
                            :
                            'text-petBlue/70 hover:text-petBlue pb-2 cursor-pointer border-b-2 border-b-transparent hover:border-b-petBlue transition-all duration-300'}`}>
                    {t(item)}
                </li>
            )}
        </ul>
    )
}

export default CategoryItemsType