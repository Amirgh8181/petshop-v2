import { Hero } from '@/ui/Hero'
import ClinicAndShelterCard from '@/src/components/UI/clinicAndShelterCard'
import bgImage from "@/public/images/Clinics/hero bg.jpg"
import { getTranslations } from 'next-intl/server';
import getClinics from '@/src/lib/getClinics';
import { clinicAndSheltersData } from '@/root/types';

const Clinics = async () => {
    const req:clinicAndSheltersData[] = await getClinics()
    const t = await getTranslations("Clinic")
    return (
        <>
            <Hero
                bgImage={bgImage}
                title={t("Hero.title")}
                desc={t("Hero.description")}
                faqLink='/Clinics/#startClinic'
            />
            <div className='w-full min-h-screen mt-6' id='startClinic'>
                <ClinicAndShelterCard href='/Clinics/' data={req} headerText={t("Card.head")} />
            </div>
        </>
    )
}

export default Clinics
