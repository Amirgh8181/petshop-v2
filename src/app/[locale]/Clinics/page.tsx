import { ClinicsAndSheltersHero } from '@/src/components/UI/ClinicsAndSheltersHero'
import ClinicAndShelterCard from '@/src/components/UI/clinicAndShelterCard'
import getClinics from '@/src/lib/getClinics';
import React from 'react'

const Clinics = async () => {
    const req = await getClinics()

    return (
        <div>
            <div>
                <ClinicsAndSheltersHero img={'/images/Clinics/hero-pic.png'} />
            </div>
            <div className='w-full min-h-screen mt-6'>
                <ClinicAndShelterCard href='/Clinics/' data={req} />
            </div>
        </div>
    )
}

export default Clinics