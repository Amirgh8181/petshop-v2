import ProductPreview from '@/src/components/Shop/ShopItem'
import { Hero } from '@/ui/Hero'
import bgImage from "@/public/images/Shop/heroBg.jpg"
import Collection from '@/src/components/Shop/othersection'
import { getTranslations } from 'next-intl/server'
import getShopItems from '@/src/lib/getShopItems'
import CategoryPreview from '@/src/components/Shop/ShowCategory'
import { ShopItem } from '@/root/types'
import ShopSliders from '@/src/components/Shop/Sliders'

const Shop = async () => {
  const products: ShopItem[] = await getShopItems()
  const t = await getTranslations("ShopPage.Hero")
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