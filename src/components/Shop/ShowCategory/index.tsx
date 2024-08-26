"use client"
import ScaleAnimation from '../../UI/Animation/ScaleAnimation'
import { useTranslations } from 'next-intl'
import StaticImageCopm from '../../UI/StaticImage'
import { useRouter } from 'next/navigation'
import { useCategType } from '@/src/stores/Category/useCategType'
import { categPrevData } from './data'


const CategoryPreview = () => {
    const t = useTranslations("ShopPage.category")
    const router = useRouter()
    const { setType } = useCategType()
    const handleCategType = (type: string) => {
        setType(type)
        router.push("/Shop/category")
    }

    return (
        <div id='startShop' className='w-full md:w-[80%] flex flex-col items-center justify-center space-y-6 overflow-hidden mx-auto'>
            <h3>{t("head")}</h3>
            <ScaleAnimation
                once
                scaleVal
                childClass='grid grid-cols-3 sm:grid-cols-6 gap-4 px-2'
            >
                {categPrevData.map(item =>
                    <div onClick={() => handleCategType(item.type)}
                        className='group space-y-2 cursor-pointer w-full grid place-items-center'
                    >
                        <StaticImageCopm img={item.image} imgAlt='categ img'
                            imgClass='xl:w-[55%] w-[60%] aspect-square rounded-full border shadow-xl group-hover:scale-110 transition-all duration-500' />
                        <div className='xl:text-2xl lg:text-base md:text-sm text-xs font-bold '>{t(item.type)}</div>
                    </div>
                )}
            </ScaleAnimation>
        </div>
    )
}

export default CategoryPreview