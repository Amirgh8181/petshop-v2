import heroimg from '@/public/images/Shop/category/categoy-hero.webp'
import { Hero } from '@/ui/Hero';
import { useTranslations } from 'next-intl';
const CategoyPageHeader = () => {
    const t = useTranslations("ShopPage.category.Hero")
    return (
        <>
            <Hero
                img={heroimg}
                bgImage={heroimg}
                title={t("title")}
                desc={t("description")}
            />
        </>

    )
}
export default CategoyPageHeader
