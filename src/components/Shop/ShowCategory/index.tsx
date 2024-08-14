import Image from 'next/image'
import Link from 'next/link'
import ScaleAnimation from '../../UI/Animation/ScaleAnimation'
import { useTranslations } from 'next-intl'

interface categType {
    image: string,
    link: string,
    type: string,
}

const CategoryPreview = () => {
    const t = useTranslations("ShopPage.category")

    const categDetails: categType[] = [
        { image: '/images/Shop/colection1.jpg', link: "/Shop/category/Beds", type: "Beds" },
        { image: '/images/Shop/colection2.jpg', link: "/Shop/category/Furnitures", type: "Furnitures" },
        { image: '/images/Shop/colection3.jpg', link: "/Shop/category/Treats", type: "Treats" },
        { image: '/images/Shop/colection4.jpg', link: "/Shop/category/Food", type: "Food" },
        { image: '/images/Shop/colection5.jpg', link: "/Shop/category/Health", type: "Health" },
        { image: '/images/Shop/colection6.jpg', link: "/Shop/category/Toys", type: "Toys" }
    ]

    return (
        <div id='startShop' className='w-full flex flex-col items-center justify-center space-y-6 overflow-hidden'>
            <h3>{t("head")}</h3>
            <ScaleAnimation
                once
                scaleVal
                childClass='flex'
                boxClass='w-full flex justify-center mx-auto md:space-x-4 text-center'
                >
                {categDetails.map(item =>
                    <Link href={`/Shop/category?search=${item.type}`} key={item.type}
                        className='group flex flex-col justify-center items-center space-y-2 cursor-pointer'
                    >
                        <Image src={item.image} alt='categ img' width={100} height={100}
                            className='w-[65%] aspect-square rounded-full border shadow-xl group-hover:scale-110 transition-all duration-400' />
                        <div className='md:text-sm text-xs font-bold '>{t(item.type)}</div>
                    </Link>
                )}
            </ScaleAnimation>
        </div>
    )
}

export default CategoryPreview