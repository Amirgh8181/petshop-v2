import ClinicAndShelterCard from '@/src/components/UI/clinicAndShelterCard'
import { Hero } from '@/ui/Hero'
import bgImage from "@/public/images/Shelters/hero-bg.jpg"
//import { getTranslations } from 'next-intl/server'
//import getShelters from '@/src/lib/getShelters'
import { clinicAndSheltersData } from '@/root/types'
import { useTranslations } from 'next-intl'
import { shelterData } from '@/src/data/SheltersData'

const Shelters =  () => {
    //const req:clinicAndSheltersData[] = await getShelters()
    const req=shelterData as clinicAndSheltersData[]
    const t =useTranslations("Shelter")

    return (
        <>
            <Hero
                bgImage={bgImage}
                title={t("Hero.title")}
                desc={t("Hero.description")}
                faqLink='/Shelters/#startShelter'
                    />
            <div className='w-full min-h-screen mt-6' id='startShelter'>
                <ClinicAndShelterCard href='/Shelters/' data={req} headerText={t("Card.head")}/>
            </div>
        </>
    )
}

export default Shelters