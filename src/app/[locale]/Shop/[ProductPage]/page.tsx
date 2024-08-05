import { ShopItem } from '@/root/types';
import ShopItemSinglePageContainer from '@/src/components/ShopItemSinglePage';
import OneLevelBackBtn from '@/src/components/UI/Button/OneLevelBack';
import getSingleShopItem from '@/src/lib/getSingleShopItem';

const ProductPage = async ({ params }: { params: { ProductPage: string } }) => {
    const req: ShopItem = await getSingleShopItem(params.ProductPage)
    return (
        <div className='w-full'>
            <OneLevelBackBtn />
            <ShopItemSinglePageContainer product={req} />
        </div>
    )
}
export default ProductPage


