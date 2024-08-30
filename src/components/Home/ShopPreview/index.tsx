import { ShopItem } from '@/root/types';
import getShopItems from '@/src/lib/getShopItems';
import SliderUi from '../../UI/SliderUi';

const ShopPreview = async () => {
    let req: ShopItem[] = await getShopItems()
    return (
        <SliderUi link='/Shop' req={req} title="Index.Shop.title" marginY/>
    )
}
export default ShopPreview

