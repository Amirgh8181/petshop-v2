import { ShopItem } from '@/root/types';
import CategoryProducts from '@/src/components/Shop/CategoryProduce';
import CategoyPageHeader from '@/src/components/Shop/CategoyPageHeader';
import getShopItems from '@/src/lib/getShopItems';

const Category = async () => {
    const request: ShopItem[] = await getShopItems()


    return (
        <main className='space-y-[3vmax] mb-7'>
                <CategoyPageHeader />
                <CategoryProducts data={request}/>
        </main>
    )
}

export default Category;
