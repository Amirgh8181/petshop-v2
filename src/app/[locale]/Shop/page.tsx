import ProductPreview from '@/src/components/Shop/ShopItem'
import Category from '@/src/components/Shop/ShowCategory'
import OtherSection from '@/src/components/Shop/othersection'
import { Hero } from '@/ui/Hero'
import getShopItems from '@/src/lib/getShopItems'
import mainImg from "@/public/images/Shop/hero.jpg"
import bgImage from "@/public/images/Shop/heroBg.jpg"

const Shop = async () => {
  let loading = true;
  const products = await getShopItems()
  loading = false

  return (
    <main className='space-y-[5vmax] mb-7'>
      <Hero
        img={mainImg}
        bgImage={bgImage}
        title='Food that is healthy for your kitty'
        title2='Enjoy 15% of money'
        desc='Food that is healthy for your kitty' />
      <Category />
      {
        loading
          ? <div className='h-screen w-full bg-black'></div>
          : <ProductPreview products={products} />
      }

      <OtherSection />
    </main>
  )
}

export default Shop