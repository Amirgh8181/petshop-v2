import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import TranslateAnimation from '../../UI/Animation/TranslateAnimation'
import { clinicAndSheltersData } from '@/root/types'
import { useTranslations } from 'next-intl'

const SheltersSinglePageLeftSide = ({ shelterData }: { shelterData: clinicAndSheltersData }) => {
    const t = useTranslations("Shelter.singlePage")
    return (
        <TranslateAnimation boxClass='w-[90%] mx-auto py-4 text-center md:text-start' xVal={40} once>
            <h3>{shelterData.name}</h3>
            <p className='w-[80%] mx-auto md:mx-0'>{shelterData.shortDescription}</p>
            <div className='divider divider-primary' />
            <div className='w-[80%] font-bold space-y-3 mx-auto md:mx-0'>
                <p>
                    {t("location")}
                    <br />
                    {shelterData.address}
                </p>
                <p>
                    {t("email")}
                    <br />
                    <span className='underline underline-offset-2'>
                        info@humanecobb.com
                    </span>
                </p>
                <p>
                    {t("phone")}
                    <br />
                    {shelterData.phone}
                </p>
                <p>{t("fax")}
                    <br />
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