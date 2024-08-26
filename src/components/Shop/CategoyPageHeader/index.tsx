import heroimg from '@/public/images/Shop/category/categoy-hero.webp'
import { Hero } from '@/ui/Hero';
import { useTranslations } from 'next-intl';
const CategoyPageHeader = () => {
    const t = useTranslations("ShopPage.category.Hero")
    return (
        <>
            <Hero
                bgImage={heroimg}
                title={t("title")}
                desc={t("description")}
                faqLink='/Shop/category/#startCategory'
            />
            
        </>

    )
}
export default CategoyPageHeader
