import ShopItemSinglePageContainer from '@/src/components/ShopItemSinglePage';
import getSingleShopItem from '@/src/lib/getSingleShopItem';



const ProductPage = async ({ params }: { params: { ProductPage: string } }) => {
    console.log(params.ProductPage);
    
    const req = await getSingleShopItem(params.ProductPage)
    
    return (
        <>
            <ShopItemSinglePageContainer product={req} />
        </>
    )
}

export default ProductPage


