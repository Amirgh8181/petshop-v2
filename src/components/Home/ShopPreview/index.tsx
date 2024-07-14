 import { ShopItem } from '@/root/types';
 import getProducts from '@/src/lib/getProducts';
import PreviewSectionsHeader from '@/components/UI/previewHeader';
import SwiperItem from "./ShopItem"



const ShopPreview = async () => {
let req: ShopItem[] = await getProducts()

    return (
        <section id="ShopPreview" className='w-full overflow-hidden space-y-[4dvh] py-[10dvh]'>
            <PreviewSectionsHeader previewLink='/Shop' previewSectionName='Shop' />
            <SwiperItem data={req}/>
        </section>
    )
}

export default ShopPreview