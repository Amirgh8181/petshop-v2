import bgImage from "@/public/images/Shop/heroBg.jpg"
//import { getTranslations } from 'next-intl/server'
//import getShopItems from '@/src/lib/getShopItems'
import { ShopItem } from '@/root/types'
import { useTranslations } from 'next-intl'
import { productData } from '@/src/data/ProductsData'
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/ui/Hero').then(HeroComp=>HeroComp.Hero));
const CategoryPreview = dynamic(() => import('@/src/components/Shop/ShowCategory'));
const ProductPreview = dynamic(() => import('@/src/components/Shop/ShopItem'));
const ShopSliders = dynamic(() => import('@/src/components/Shop/Sliders'));
const Collection = dynamic(() => import('@/src/components/Shop/othersection'));





const Shop = () => {
  //const products: ShopItem[] = await getShopItems()
  const products = productData as ShopItem[]
  const t = useTranslations("ShopPage.Hero")
  return (
    <>
      <Hero
        bgImage={bgImage}
        title={t("title1")}
        title2={t("title2")}
        desc={t("title3")} 
        faqLink='/Shop/#startShop'
        />
      <CategoryPreview />
      <ProductPreview products={products} />
      <ShopSliders data={products}/>
      <Collection />
    </>
  )
}

export default Shop