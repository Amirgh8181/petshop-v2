import ShopHero from '@/src/components/Shop/ShopHero'
import ProductPreview from '@/src/components/Shop/ShopItem'
import Category from '@/src/components/Shop/ShowCategory'
import OtherSection from '@/src/components/Shop/othersection'
import getShopItems from '@/src/lib/getShopItems'

const Shop = async () => {
  let loading = true;
  const products = await getShopItems()
  loading = false

  return (
    <main className='space-y-[5vmax] mb-7'>
      <ShopHero />
      <Category />
       {
        loading
        ?<div className='h-screen w-full bg-black'></div>
        :<ProductPreview products={products} />
      } 
      
      <OtherSection />
    </main>
  )
}

export default Shop