import { clinicAndSheltersData } from '@/root/types'
import Image from 'next/image'
import React from 'react'
import { FaUserDoctor } from 'react-icons/fa6'
import doctorImg from "@/public/images/Clinics/clinicDoctor.png"
import StaticImageCopm from '../../UI/StaticImage'

const DoctorSection = ({ clinicData }: { clinicData: clinicAndSheltersData }) => {
    console.log(clinicData);

    return (
        <div className='w-full md:w-[80%] rounded-box customGlass flex items-center p-4 space-x-2'>
            <StaticImageCopm img={doctorImg}  imgAlt='doctor image' 
                imgClass='w-1/3 aspect-square object-contain mx-auto'
            />
            <div className='flex-col w-2/3'>
                <div className='flex items-start space-x-2'>
                    <span className='text-lg text-primary'><FaUserDoctor /></span>
                    <span>{clinicData.doctorName}</span>
                </div>
                <div>
                    {clinicData.doctorDescription}
                </div>
            </div>
        </div>
    )
}

export default DoctorSection