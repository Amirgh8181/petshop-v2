import ClinicAndShelterCard from '@/src/components/UI/clinicAndShelterCard'
import getShelters from '@/src/lib/getShelters'
import { Hero } from '@/ui/Hero'
import mainImg from "@/public/images/Shelters/hero-pic.jpg"
import bgImage from "@/public/images/Shelters/hero-bg.jpg"
import { getTranslations } from 'next-intl/server'

const Shelters = async () => {
    const req = await getShelters()
    const t = await getTranslations("Shelter")

    return (
        <>
            <Hero
                img={mainImg}
                bgImage={bgImage}
                title={t("Hero.title")}
                desc={t("Hero.description")}
                    />
            <div className='w-full min-h-screen mt-6'>
                <ClinicAndShelterCard href='/Shelters/' data={req} headerText={t("Card.head")}/>
            </div>
        </>
    )
}

export default Shelters