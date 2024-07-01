import { ClinicsAndSheltersHero } from '@/src/components/UI/ClinicsAndSheltersHero'
import ClinicAndShelterCard from '@/src/components/UI/clinicAndShelterCard'
import getShelters from '@/src/lib/getShelters'
import React from 'react'

const Shelters = async () => {
    const req = await getShelters()

    return (
        <div>
            <div>
                <ClinicsAndSheltersHero img={'/images/Shelters/hero-pic.png'} />
            </div>
            <div className='w-full min-h-screen mt-6'>
                <ClinicAndShelterCard href='/Shelters/' data={req} />
            </div>
        </div>
    )
}

export default Shelters