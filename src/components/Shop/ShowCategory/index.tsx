import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import ScaleAnimation from '../../UI/Animation/ScaleAnimation'
import { useTranslations } from 'next-intl'
import StaticImageCopm from '../../UI/StaticImage'
import categoryPrev1 from '@/public/images/Shop/colection1.jpg'
import categoryPrev2 from '@/public/images/Shop/colection2.jpg'
import categoryPrev3 from '@/public/images/Shop/colection3.jpg'
import categoryPrev4 from '@/public/images/Shop/colection4.jpg'
import categoryPrev5 from '@/public/images/Shop/colection5.jpg'
import categoryPrev6 from '@/public/images/Shop/colection6.jpg'
interface categType {
    image: StaticImageData,
    link: string,
    type: string,
}

const CategoryPreview = () => {
    const t = useTranslations("ShopPage.category")

    const categDetails: categType[] = [
        { image: categoryPrev1, link: "/Shop/category/Beds", type: "Beds" },
        { image: categoryPrev2, link: "/Shop/category/Furnitures", type: "Furnitures" },
        { image: categoryPrev3, link: "/Shop/category/Treats", type: "Treats" },
        { image: categoryPrev4, link: "/Shop/category/Food", type: "Food" },
        { image: categoryPrev5, link: "/Shop/category/Health", type: "Health" },
        { image: categoryPrev6, link: "/Shop/category/Toys", type: "Toys" }
    ]

    return (
        <div id='startShop' className='w-full flex flex-col items-center justify-center space-y-6 overflow-hidden'>
            <h3>{t("head")}</h3>
            <ScaleAnimation
                once
                scaleVal
                childClass='grid grid-cols-3 sm:grid-cols-6 gap-4 px-2'
            >
                {categDetails.map(item =>
                    <Link href={`/Shop/category?search=${item.type}`} key={item.type}
                        className='group space-y-2 cursor-pointer w-full grid place-items-center'
                    >
                        <StaticImageCopm img={item.image} imgAlt='categ img'
                            imgClass='xl:w-[55%] md:w-[45%] w-[60%] aspect-square rounded-full border shadow-xl group-hover:scale-110 transition-all duration-500' />
                        <div className='xl:text-2xl lg:text-base md:text-sm text-xs font-bold '>{t(item.type)}</div>
                    </Link>
                )}
            </ScaleAnimation>
        </div>
    )
}

export default CategoryPreview