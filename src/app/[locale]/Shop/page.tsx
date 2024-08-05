import ProductPreview from '@/src/components/Shop/ShopItem'
import Category from '@/src/components/Shop/ShowCategory'
import { Hero } from '@/ui/Hero'
import mainImg from "@/public/images/Shop/hero.jpg"
import bgImage from "@/public/images/Shop/heroBg.jpg"
import Collection from '@/src/components/Shop/othersection'
import { getTranslations } from 'next-intl/server'
import getShopItems from '@/src/lib/getShopItems'

const Shop = async () => {
  const products = await getShopItems()
  const t=await getTranslations("ShopPage.Hero")
  return (
    <main className='space-y-[5vmax] mb-7'>
      <Hero
        img={mainImg}
        bgImage={bgImage}
        title={t("title1")}
        title2={t("title2")}
        desc={t("title3")} />
      <Category />
      <ProductPreview products={products} />
      <Collection />
    </main>
  )
}

export default Shop