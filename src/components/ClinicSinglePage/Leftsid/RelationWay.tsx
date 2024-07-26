import { clinicAndSheltersData } from '@/root/types'
import { useTranslations } from 'next-intl'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import TranslateAnimation from '../../UI/Animation/TranslateAnimation'

const RelationWay = ({ clinicData }: { clinicData: clinicAndSheltersData }) => {
    const t = useTranslations("Clinic.singlePage")
    return (
        <TranslateAnimation
            yVal={40}
            once
            stiffness={120}
        >
            <div className='w-full md:w-[80%] rounded-box customGlass grid place-content-center space-y-4 p-6' dir='ltr'>
                <div className='w-[80%] flex items-start space-x-2'>
                    <span className='text-lg text-primary'><FaLocationDot /></span>
                    <span>{clinicData.address}</span>
                </div>
                <div className='w-[80%] flex items-start space-x-2'>
                    <span className='text-lg text-primary'><FaPhoneAlt /></span>
                    <span>{clinicData.phone}</span>
                </div>
                <div className='w-[80%] text-center mx-auto'>{t("relationDesc")}</div>
                <div className='w-full flex flex-col items-center space-y-2'>
                    <button className='w-[80%] bg-primary border-2 border-primary py-4 rounded-full text-xs md:text-base'>{t("book")}</button>
                    <button className='w-[80%] dark:bg-base-200 border-2 border-primary py-4 rounded-full text-xs md:text-base'>{t("online")}</button>
                </div>
            </div>
        </TranslateAnimation>
    )
}

export default RelationWay