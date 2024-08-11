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
    <div className='w-full space-y-4 my-4' dir='ltr'>
      <TextAnimations
        boxClass='md:text-7xl text-5xl capitalize flex justify-center'
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
          boxClass='w-[90%] mx-auto'
          childClass='bg-neutral-content dark:bg-neutral rounded-[2.5rem] shadow-xl
           grid sm:grid-cols-3 grid-cols-1 place-content-center p-4 space-y-4 md:space-y-0'
        >
            <Image src={item.attachmentFile} alt='clinic item img' width={300} height={300}
              className='md:w-[85%] md:py-2 w-[90%] rounded-[2.5rem] mx-auto self-center' />

          <div className='md:text-start text-center space-y-2 self-center'>
            <h3 className='md:text-lg sm:text-sm text-base font-bold'>{item.name}</h3>
              <CenterItems icon={<FaLocationDot />} text={item.address} />
              <CenterItems icon={<FaPhoneAlt />} text={item.phone} />
              <CenterItems icon={<FaUserDoctor />} text={item.doctorName} />
          </div>
          <div className='md:text-lg text-base font-bold md:space-y-8 space-y-4 flex flex-col justify-center items-center'>
            <div className='text-center sm:text-xs md:text-base text-sm'>
              <p>8:00 {t("am")} - 7:00 {t("pm")}</p>
              <p>Sat <span className='text-petBlue'>Sun Mon Tu</span> Wed Thu <span className='text-petBlue'>Fri</span> </p>
            </div>
            <Link href={`${href}${item._id}`} className='w-[80%] !p-4 dark:bg-darkPetBlue bg-petBlue btn rounded-box sm:text-xs md:text-base text-sm grid place-content-center'>
              {t("book")}
            </Link>
          </div>

        </TranslateAnimation>
      )}
    </div >
  )
}

export default ClinicAndShelterCard


