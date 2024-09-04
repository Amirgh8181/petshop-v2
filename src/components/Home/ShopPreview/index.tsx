import { ShopItem } from '@/root/types';
import { productData } from '@/src/data/ProductsData';
import SliderUi from '../../UI/SliderUi';



const ShopPreview = async () => {
    //let req: ShopItem[] = await getShopItems()
    const req = productData as ShopItem[]
    return (
        <SliderUi link='/Shop' req={req} title="Index.Shop.title" marginY/>
    )
}
export default ShopPreview

