import { ShopItem } from '@/root/types';
import CategoryProducts from '@/src/components/Shop/CategoryProduce';
import CategoyPageHeader from '@/src/components/Shop/CategoyPageHeader';
import OneLevelBackBtn from '@/src/components/UI/Button/OneLevelBack';
import getShopItems from '@/src/lib/getShopItems';

const Category = async () => {
    const request: ShopItem[] = await getShopItems()
    return (
        <main className='space-y-[3vmax] md:space-y-[1vmax] mb-7'>
            <OneLevelBackBtn/>
            <CategoyPageHeader />
            <CategoryProducts data={request} />
        </main>
    )
}

export default Category;
