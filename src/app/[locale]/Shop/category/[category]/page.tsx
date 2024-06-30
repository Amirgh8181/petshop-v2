import { ShopItem } from '@/root/types';
import CategoyPageHeader from '@/src/components/Shop/CategoyPageHeader';
import CardUi2 from '@/src/components/UI/Card/Card';
import ProduceCart from '@/src/components/UI/CartProduce/ProduceCart';
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
        <div>
            <div className='w-full mt-6'>
                <CategoyPageHeader type={category} />
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-8'>
                {
                    data.map(item =>

                        <CardUi2 product={item} />
                    )
                }
            </div >
        </div>
    )
}

export default Category;
