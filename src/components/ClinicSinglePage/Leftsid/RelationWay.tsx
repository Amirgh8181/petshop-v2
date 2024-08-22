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
            <div className='w-full md:w-[80%] rounded-box customGlass space-y-4 p-6 mx-auto' dir='ltr'>
                <div className='w-[80%] flex items-center mx-auto space-x-2 hocTextSize2'>
                    <span className='clinicIcon'><FaLocationDot /></span>
                    <span>{clinicData.address}</span>
                </div>
                <div className='w-[80%] flex items-center mx-auto space-x-2 hocTextSize2'>
                    <span className='clinicIcon'><FaPhoneAlt /></span>
                    <span>{clinicData.phone}</span>
                </div>
                <div className='w-[80%] text-center mx-auto hocTextSize'>{t("relationDesc")}</div>
                <div className='w-full flex flex-col items-center space-y-2'>
                    <button className='clinicPageBtn bg-primary btnText'>{t("book")}</button>
                    <button className='clinicPageBtn dark:bg-base-200 btnText'>{t("online")}</button>
                </div>
            </div>
        </TranslateAnimation>
    )
}

export default RelationWay