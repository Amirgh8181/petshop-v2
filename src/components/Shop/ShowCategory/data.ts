import { StaticImageData } from "next/image";
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
export const categPrevData: categType[] = [
    { image: categoryPrev1, link: "/Shop/category/Beds", type: "Beds" },
    { image: categoryPrev2, link: "/Shop/category/Furnitures", type: "Furnitures" },
    { image: categoryPrev3, link: "/Shop/category/Treats", type: "Treats" },
    { image: categoryPrev4, link: "/Shop/category/Food", type: "Food" },
    { image: categoryPrev5, link: "/Shop/category/Health", type: "Health" },
    { image: categoryPrev6, link: "/Shop/category/Toys", type: "Toys" }
]