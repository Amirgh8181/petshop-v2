import { Hero } from '@/ui/Hero'
import ClinicAndShelterCard from '@/src/components/UI/clinicAndShelterCard'
import getClinics from '@/src/lib/getClinics';
import mainImg from "@/public/images/Clinics/hero-pic.jpg"
import bgImage from "@/public/images/Clinics/hero bg.jpg"

const Clinics = async () => {
    const req = await getClinics()

    return (
        <>
            <Hero
                img={mainImg}
                bgImage={bgImage}
                title='culpa qui officia deserunt '
                desc='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur Excepteur sint.'
            />
            <div className='w-full min-h-screen mt-6'>
                <ClinicAndShelterCard href='/Clinics/' data={req} headerText='clinics' />
            </div>
        </>
    )
}

export default Clinics
