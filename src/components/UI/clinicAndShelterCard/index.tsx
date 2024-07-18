import { clinicAndSheltersData } from '@/root/types'
import Image from 'next/image'
import { FaUserDoctor } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import CenterItems from './CenterItems'
import Link from 'next/link';
import TranslateAnimation from '../Animation/TranslateAnimation';
import TextAnimations from '../Animation/TextAnimation';
import { useTranslations } from 'next-intl';



const ClinicAndShelterCard = ({ href, data, headerText }: { href: string, data: clinicAndSheltersData[], headerText: string }) => {
  const t = useTranslations("Clinic.Card")
  return (
    <div className='w-full min-h-screen flex flex-col items-center gap-4 pb-[2vmax]' dir='ltr'>
      <TextAnimations
        boxClass={`text-7xl capitalize flex justify-center`}
        text={headerText}
        typeAnimation='typing'
        el='h1'
        once
      />

      {
      data.map(item =>
        <TranslateAnimation
          once
          yVal={40}
          key={item._id}
          boxClass='w-[90%] md:h-[40vh]'
          childClass='w-full h-full bg-gray-200 dark:bg-gray-900 rounded-[2.5rem] shadow-xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:py-8 py-4 md:px-4'
        >
          <div className='md:w-[30%] w-[90%] md:h-full flex items-center justify-center'>
            <Image src={item.attachmentFile} alt='clinic item img' width={300} height={300}
              className='max-w-[80%] rounded-[2.5rem]' />
          </div>
          <div className='flex flex-col items-center md:items-start md:text-start text-center space-y-2 text-sm md:w-1/3 w-[90%]'>
            <h3 className='md:text-lg text-base font-bold'>{item.name}</h3>

            <div className='md:w-2/3 flex flex-col  space-y-2'>
              <CenterItems icon={<FaLocationDot />} text={item.address} />
              <CenterItems icon={<FaPhoneAlt />} text={item.phone} />
              <CenterItems icon={<FaUserDoctor />} text={item.doctorName} />
            </div>
          </div>
          <div className='flex flex-col items-center md:text-lg text-base font-bold md:w-1/3 w-[90%] space-y-8'>

            <div className='text-center'>
              <div>8:00 {t("am")} - 7:00 {t("pm")}</div>
              <div>Sat <span className='text-petBlue'>Sun Mon Tu</span> Wed Thu <span className='text-petBlue'>Fri</span> </div>
            </div>
            <Link href={`${href}${item._id}`} className='w-[90%] !p-4 dark:bg-darkPetBlue bg-petBlue btn rounded-box'>
              {t("book")}
            </Link>
          </div>

        </TranslateAnimation>
      )}
    </div >
  )
}

export default ClinicAndShelterCard


