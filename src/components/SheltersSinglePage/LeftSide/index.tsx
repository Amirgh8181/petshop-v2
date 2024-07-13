import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import TranslateAnimation from '../../UI/Animation/TranslateAnimation'

const SheltersSinglePageLeftSide = () => {
    return (
        <TranslateAnimation boxClass='w-[90%] mx-auto py-4' xVal={40} once>
            <h3 className='w-[80%]'>VHumane Society of Cobb County</h3>
            <p className='w-[80%]'>Our mission is to promote humane welfare and responsible animal guardianship through educational community outreach, shelter, and spay/neuter programs.</p>
            <div className='divider divider-primary' />
            <div className='w-[80%] font-bold space-y-3'>
                <p>We are located at:148 S. Fairground St. SEMarietta, GA 30060</p>
                <p>
                    Email:
                    <span className='underline underline-offset-2'>
                        info@humanecobb.com
                    </span>
                </p>
                <p>Phone: 770-428-LOST (5678)</p>
                <p>Fax: 770-423-9386</p>
                <div className='flex space-x-3 text-3xl'>
                    <span><FaFacebook /></span>
                    <span><FaInstagram /></span>
                </div>
            </div>
        </TranslateAnimation>
    )
}

export default SheltersSinglePageLeftSide