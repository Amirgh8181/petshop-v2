 import { ShopItem } from '@/root/types';
 import getProducts from '@/src/lib/getProducts';
import PreviewSectionsHeader from '@/components/UI/previewHeader';
import SwiperItem from "./ShopItem"
import { getTranslations } from 'next-intl/server';



const ShopPreview = async () => {
let req: ShopItem[] = await getProducts()
const t = await getTranslations("Index.Shop")
    return (
        <section id="ShopPreview" className='w-full overflow-hidden space-y-[4dvh] py-[10dvh]'>
            <PreviewSectionsHeader previewLink='/Shop' previewSectionName={t("title")} />
            <SwiperItem data={req}/>
        </section>
    )
}

export default ShopPreview