import { TabsProps } from '@/src/components/UI/Tabs'
import { clinicAndSheltersData, } from '@/root/types'
import Image from 'next/image'
import Tabs from '@/src/components/UI/Tabs'
import { useTranslations } from 'next-intl'

const ClinicSinglePageRightSide = ({ clinicData }: { clinicData: clinicAndSheltersData }) => {
    const t =useTranslations("Clinic.singlePage")
    const tabData: TabsProps[] = [
        { head: t("about"), content: clinicData?.shortDescription },
        { head: t("reviews"), content: clinicData?.shortDescription }
    ]
    return (
        <>
            <div className='w-full p-4 flex flex-col space-y-6 items-center'>

                <Image src={clinicData.attachmentFile} alt='adasd' width={500} height={300}
                    className='w-[90%] aspect-[9/4] rounded-box border-2 border-primary object-cover'
                />

                <div className=' md:text-xl text-base font-bold'>
                    {clinicData.name}
                </div>
            </div>
            <div className='w-full'>
                <Tabs renderData={tabData} />
            </div>
        </>
    )
}

export default ClinicSinglePageRightSide