import ClinicAndShelterCard from '@/src/components/UI/clinicAndShelterCard'
import getShelters from '@/src/lib/getShelters'
import { Hero } from '@/ui/Hero'
import mainImg from "@/public/images/Shelters/hero-pic.jpg"
import bgImage from "@/public/images/Shelters/hero-bg.jpg"

const Shelters = async () => {
    const req = await getShelters()

    return (
        <>
            <Hero
                img={mainImg}
                bgImage={bgImage}
                title='culpa qui officia deserunt '
                desc='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur Excepteur sint.'/>
            <div className='w-full min-h-screen mt-6'>
                <ClinicAndShelterCard href='/Shelters/' data={req} headerText='shelters'/>
            </div>
        </>
    )
}

export default Shelters