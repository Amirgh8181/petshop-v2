import { ShopItem } from "@/root/types"
import PreviewSectionsHeader from "./SliderHeader"
import SwiperItem from "./SliderItem"
import { useTranslations } from "next-intl"

interface SliderUiProps {
    req: ShopItem[],
    title: string,
    link: string,
    type?: string
    marginY?: boolean
}

const SliderUi = ({ req, title, link, type, marginY }: SliderUiProps) => {
    const t = useTranslations()

    return (
        <section id="ShopPreview" className={`w-full overflow-hidden space-y-[4dvh] ${marginY && 'py-[10dvh]'}`}>
            <PreviewSectionsHeader previewLink={link} previewSectionName={t(title)} type={type} />
            <SwiperItem data={req} />
        </section>
    )
}

export default SliderUi