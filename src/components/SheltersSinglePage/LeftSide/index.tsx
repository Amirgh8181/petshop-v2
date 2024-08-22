import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import TranslateAnimation from '../../UI/Animation/TranslateAnimation'
import { clinicAndSheltersData } from '@/root/types'
import { useTranslations } from 'next-intl'

const SheltersSinglePageLeftSide = ({ shelterData }: { shelterData: clinicAndSheltersData }) => {
    const t = useTranslations("Shelter.singlePage")
    return (
        <TranslateAnimation boxClass='w-[90%] mx-auto py-4 text-center md:text-start overflow-hidden' xVal={40} once>
            <h3>{shelterData.name}</h3>
            <p className='w-[80%] mx-auto md:mx-0 xl:text-xl lg:text-base text-sm'>{shelterData.shortDescription}</p>
            <div className='divider divider-primary' />
            <div className='w-[80%] hocTextSize2 space-y-1 mx-auto md:mx-0'>
                <strong>
                    {t("location")}
                </strong>
                <p>
                    {shelterData.address}
                </p>
                <strong>
                    {t("email")}
                </strong>
                <p className='underline underline-offset-2'>
                    info@humanecobb.com
                </p>
                <strong>
                    {t("phone")}
                </strong>
                <p>
                    {shelterData.phone}
                </p>
                <strong>
                    {t("fax")}
                </strong>
                <p>
                    770-423-9386
                </p>
                <div className='flex space-x-3 text-3xl justify-center md:justify-start'>
                    <span><FaFacebook /></span>
                    <span><FaInstagram /></span>
                </div>
            </div>
        </TranslateAnimation >
    )
}

export default SheltersSinglePageLeftSide