import { clinicAndSheltersData } from '@/root/types'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const RelationWay = ({ clinicData }: { clinicData: clinicAndSheltersData }) => {
    return (
        <div className='w-full md:w-[80%] rounded-box customGlass grid place-content-center space-y-4 p-6'>
            <div className='w-[80%] flex items-start space-x-2'>
                <span className='text-lg text-primary'><FaLocationDot /></span>
                <span>{clinicData.address}</span>
            </div>
            <div className='w-[80%] flex items-start space-x-2'>
                <span className='text-lg text-primary'><FaPhoneAlt /></span>
                <span>{clinicData.phone}</span>
            </div>
            <div className='w-[80%]'>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets.</div>
            <div className='w-full flex flex-col items-center space-y-2'>
                <button className='w-[80%] bg-primary border-2 border-primary py-4 rounded-full text-xs md:text-base'>Book an Appointment</button>
                <button className='w-[80%] dark:bg-base-200 border-2 border-primary py-4 rounded-full text-xs md:text-base'>Online counseling services</button>
            </div>
        </div>
    )
}

export default RelationWay