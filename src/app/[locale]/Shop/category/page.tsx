import { ShopItem } from '@/root/types';
import CategoryItemsType from '@/src/components/Shop/CategoryProduce/ItemsType';
import CategoryItemUi from '@/src/components/Shop/CategoryProduce/ItemUi';
import CategoyPageHeader from '@/src/components/Shop/CategoyPageHeader';
import OneLevelBackBtn from '@/src/components/UI/Button/OneLevelBack';
import { productData } from '@/src/data/ProductsData';
import getShopItems from '@/src/lib/getShopItems';

const Category = async () => {
    //const request: ShopItem[] = await getShopItems()
    const request = productData as ShopItem[]
    return (
        <main className='w-full'>
            <OneLevelBackBtn/>
            <CategoyPageHeader />
            <CategoryItemsType  />
            <CategoryItemUi data={request} />
        </main>
    )
}

export default Category;
