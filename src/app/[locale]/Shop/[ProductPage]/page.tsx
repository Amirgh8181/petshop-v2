import { ShopItem } from '@/root/types';
import ShopItemSinglePageContainer from '@/src/components/ShopItemSinglePage';
import OneLevelBackBtn from '@/src/components/UI/Button/OneLevelBack';
import { productData } from '@/src/data/ProductsData';
import getSingleShopItem from '@/src/lib/getSingleShopItem';

const ProductPage = async ({ params }: { params: { ProductPage: string } }) => {
    //const req: ShopItem = await getSingleShopItem(params.ProductPage)
    const req = productData.find(item=>item._id===params.ProductPage) as ShopItem

    return (
        <div className='w-full grid place-content-center'>
            <OneLevelBackBtn />
            <ShopItemSinglePageContainer product={req} />
        </div>
    )
}
export default ProductPage


