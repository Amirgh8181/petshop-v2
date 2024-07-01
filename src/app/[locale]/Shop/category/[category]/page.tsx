import { ShopItem } from '@/root/types';
import CategoyPageHeader from '@/src/components/Shop/CategoyPageHeader';
import CardUi from '@/src/components/UI/Card';
import getShopItems from '@/src/lib/getShopItems';


interface categprops {
    params: {
        category: string,
    }
}
const Category = async ({ params }: categprops) => {
    const { category } = params
    const request: ShopItem[] = await getShopItems()
    const data = category === 'All'
        ? request
        : request.filter(q => q.category === category)

    return (
        <main className='space-y-[3vmax] mb-7'>
            <div className='w-full mt-6'>
                <CategoyPageHeader type={category} />
            </div>
            <div className='grid place-items-center md:grid-cols-4 grid-cols-2 gap-8'>
                {
                    data.map(item =>

                        <CardUi product={item} />
                    )
                }
            </div >
        </main>
    )
}

export default Category;
