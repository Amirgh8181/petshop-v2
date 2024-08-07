 import { ShopItem } from '@/root/types';
import PreviewSectionsHeader from '@/components/UI/previewHeader';
import SwiperItem from "./ShopItem"
import { getTranslations } from 'next-intl/server';
import getShopItems from '@/src/lib/getShopItems';



const ShopPreview = async () => {
let req: ShopItem[] = await getShopItems()
const t = await getTranslations("Index.Shop")
    return (
        <section id="ShopPreview" className='w-full overflow-hidden space-y-[4dvh] py-[10dvh]'>
            <PreviewSectionsHeader previewLink='/Shop' previewSectionName={t("title")} />
            <SwiperItem data={req}/>
        </section>
    )
}

export default ShopPreview